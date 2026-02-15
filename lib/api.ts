/**
 * Superteam API Service
 * 
 * This file contains API integration functions for fetching real-time data
 * from the Superteam ecosystem.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.superteam.fun';
const API_KEY = process.env.NEXT_PUBLIC_SUPERTEAM_API_KEY;

interface ApiResponse<T> {
    data: T;
    success: boolean;
    error?: string;
}

interface Team {
    id: string;
    name: string;
    country: string;
    facility: string;
    members: number;
    projects: number;
}

interface Project {
    id: string;
    title: string;
    category: 'RWA' | 'DeFi' | 'Insurance' | 'Stablecoin';
    team: string;
    country: string;
    description: string;
    status: 'active' | 'completed' | 'planning';
    createdAt: string;
}

interface Narrative {
    id: string;
    title: string;
    mentions: number;
    growth: string;
    sentiment: 'Bullish' | 'Neutral' | 'Bearish';
    category: string;
}

/**
 * Fetch all teams from the Superteam ecosystem
 */
export async function fetchTeams(): Promise<Team[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/teams`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
            next: { revalidate: 60 }, // Revalidate every 60 seconds
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const result: ApiResponse<Team[]> = await response.json();
        return result.data;
    } catch (error) {
        console.error('Error fetching teams:', error);
        // Return mock data as fallback
        return getMockTeams();
    }
}

/**
 * Fetch all projects from the Superteam ecosystem
 */
export async function fetchProjects(): Promise<Project[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/projects`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
            next: { revalidate: 60 },
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const result: ApiResponse<Project[]> = await response.json();
        return result.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return getMockProjects();
    }
}

/**
 * Fetch trending narratives
 */
export async function fetchNarratives(): Promise<Narrative[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/narratives`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
            next: { revalidate: 300 }, // Revalidate every 5 minutes
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const result: ApiResponse<Narrative[]> = await response.json();
        return result.data;
    } catch (error) {
        console.error('Error fetching narratives:', error);
        return getMockNarratives();
    }
}

/**
 * Fetch team statistics by country
 */
export async function fetchTeamsByCountry() {
    try {
        const teams = await fetchTeams();

        // Group teams by country
        const countryMap = new Map<string, { teams: number; facilities: Set<string> }>();

        teams.forEach(team => {
            if (!countryMap.has(team.country)) {
                countryMap.set(team.country, { teams: 0, facilities: new Set() });
            }
            const countryData = countryMap.get(team.country)!;
            countryData.teams += 1;
            countryData.facilities.add(team.facility);
        });

        // Convert to array format
        return Array.from(countryMap.entries()).map(([country, data]) => ({
            country,
            teams: data.teams,
            facilities: data.facilities.size,
        })).sort((a, b) => b.teams - a.teams);
    } catch (error) {
        console.error('Error processing teams by country:', error);
        return getMockTeamsByCountry();
    }
}

/**
 * Fetch project category distribution
 */
export async function fetchProjectCategories() {
    try {
        const projects = await fetchProjects();

        // Count projects by category
        const categoryMap = new Map<string, number>();
        projects.forEach(project => {
            categoryMap.set(project.category, (categoryMap.get(project.category) || 0) + 1);
        });

        // Convert to chart format
        const colors = {
            'RWA': 'oklch(0.488 0.243 264.376)',
            'DeFi': 'oklch(0.696 0.17 162.48)',
            'Insurance': 'oklch(0.769 0.188 70.08)',
            'Stablecoin': 'oklch(0.627 0.265 303.9)',
        };

        return Array.from(categoryMap.entries()).map(([name, value]) => ({
            name,
            value,
            color: colors[name as keyof typeof colors] || 'oklch(0.645 0.246 16.439)',
        }));
    } catch (error) {
        console.error('Error processing project categories:', error);
        return getMockProjectCategories();
    }
}

// Mock data functions (fallback when API is unavailable)

function getMockTeams(): Team[] {
    return [
        { id: '1', name: 'Superteam India', country: 'India', facility: 'Mumbai Hub', members: 45, projects: 12 },
        { id: '2', name: 'Superteam Vietnam', country: 'Vietnam', facility: 'Ho Chi Minh', members: 28, projects: 8 },
        // Add more mock teams as needed
    ];
}

function getMockProjects(): Project[] {
    return [
        {
            id: '1',
            title: 'DeFi Lending Protocol',
            category: 'DeFi',
            team: 'Superteam India',
            country: 'India',
            description: 'Innovative lending protocol on Solana',
            status: 'active',
            createdAt: '2026-02-14',
        },
        // Add more mock projects as needed
    ];
}

function getMockNarratives(): Narrative[] {
    return [
        {
            id: '1',
            title: 'Solana DeFi Summer 2026',
            mentions: 1247,
            growth: '+156%',
            sentiment: 'Bullish',
            category: 'DeFi',
        },
        // Add more mock narratives as needed
    ];
}

function getMockTeamsByCountry() {
    return [
        { country: 'India', teams: 45, facilities: 12 },
        { country: 'Vietnam', teams: 28, facilities: 8 },
        { country: 'Turkey', teams: 22, facilities: 6 },
        { country: 'Germany', teams: 18, facilities: 5 },
        { country: 'UK', teams: 15, facilities: 4 },
        { country: 'UAE', teams: 12, facilities: 3 },
        { country: 'Mexico', teams: 10, facilities: 3 },
        { country: 'Nigeria', teams: 8, facilities: 2 },
    ];
}

function getMockProjectCategories() {
    return [
        { name: 'RWA', value: 28, color: 'oklch(0.488 0.243 264.376)' },
        { name: 'DeFi', value: 35, color: 'oklch(0.696 0.17 162.48)' },
        { name: 'Insurance', value: 15, color: 'oklch(0.769 0.188 70.08)' },
        { name: 'Stablecoin', value: 22, color: 'oklch(0.627 0.265 303.9)' },
    ];
}
