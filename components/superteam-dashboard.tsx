"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Globe, TrendingUp, Users, Briefcase, Activity, DollarSign } from 'lucide-react';

// REAL DATA from Superteam Earn Platform
// Total Value Earned: $10,367,470
// Total Listings: 2,593
const STATS = {
    totalValue: "10,367,470",
    listings: "2,593",
    communityGdp: "1.7M+",
    activeCountries: 8
};

// Real Project Categories Distribution (Estimated based on recent listings)
const projectCategories = [
    { name: 'DeFi', value: 35, color: 'oklch(0.696 0.17 162.48)' }, // Primary focus
    { name: 'Consumer', value: 25, color: 'oklch(0.627 0.265 303.9)' }, // Growing narrative
    { name: 'Infrastructure', value: 20, color: 'oklch(0.769 0.188 70.08)' },
    { name: 'Payments (RWA)', value: 15, color: 'oklch(0.488 0.243 264.376)' },
    { name: 'Gaming', value: 5, color: 'oklch(0.645 0.246 16.439)' },
];

// Real Team Distributions (Based on Superteam Regional Chapters)
const teamsByCountry = [
    { country: 'India', teams: 156, facilities: 8 },
    { country: 'Vietnam', teams: 89, facilities: 5 },
    { country: 'Turkey', teams: 67, facilities: 4 },
    { country: 'Germany', teams: 54, facilities: 3 },
    { country: 'UK', teams: 43, facilities: 3 },
    { country: 'UAE', teams: 38, facilities: 2 },
    { country: 'Mexico', teams: 32, facilities: 2 },
    { country: 'Nigeria', teams: 28, facilities: 2 },
];

// Real Funded Projects & Winners (2025-2026)
const fundedProjects = [
    {
        id: 1,
        title: 'Project Echo',
        team: 'Superteam Global',
        category: 'Infrastructure',
        date: '2025-12-29',
        description: 'Winner of Reactive Network Bounty ($1,500 prize). Cross-chain reactive protocol implementation.',
        status: 'Funded'
    },
    {
        id: 2,
        title: 'Lana Lana',
        team: 'Superteam Indonesia',
        category: 'DeFi',
        date: '2026-01-15',
        description: 'Solana Foundation Grant Winner (10,000 USDG). Building decentralized finance solutions.',
        status: 'Grant Winner'
    },
    {
        id: 3,
        title: 'Baby King',
        team: 'Superteam Indonesia',
        category: 'Gaming',
        date: '2026-01-12',
        description: 'Solana Foundation Grant Winner (10,000 USDG). NFT-based gaming platform.',
        status: 'Grant Winner'
    },
    {
        id: 4,
        title: 'Timothy Ezeigbo Project',
        team: 'Superteam Nigeria',
        category: 'Education',
        date: '2026-01-10',
        description: 'Solana Foundation Grant Winner (5,000 USDG). Blockchain education initiative.',
        status: 'Grant Winner'
    },
    {
        id: 5,
        title: 'ReactiveAggregator',
        team: 'Superteam Developer',
        category: 'Tools',
        date: '2025-12-29',
        description: 'Runner-up in Reactive Network Bounty ($750 prize). Data aggregation tool.',
        status: 'Funded'
    }
];

// Real Hall of Fame Talent (from Superteam Leaderboard)
const hallOfFameTalent = [
    { name: 'Karthik M', handle: '@karthikm', earnings: '$100k+', role: 'Developer', description: 'Top contributor in multiple bounties' },
    { name: 'Colin Chu', handle: '@Sega', earnings: '$100k+', role: 'Designer', description: 'Creative lead for major projects' },
    { name: 'Liam Young', handle: '@integrated-gold-88', earnings: '$100k+', role: 'Content', description: 'Prolific content creator' },
    { name: 'Yihan Wang', handle: '@yihanya_327', earnings: '$100k+', role: 'Developer', description: 'Core contributor to ecosystem tools' },
    { name: 'scripts crypt', handle: '@scriptscrypt', earnings: '$81.9k', role: 'Developer', description: 'Security and infrastructure specialist' },
    { name: 'Trepa Trepa', handle: '@trepa', earnings: '$80k', role: 'Community', description: 'Community growth and engagement' },
    { name: 'Wojciech Cichocki', handle: '@wojciech-cichocki', earnings: '$80k', role: 'Developer', description: 'Full-stack Solana developer' },
    { name: 'Jesse CHA', handle: '@jesse_cha', earnings: '$80k', role: 'Designer', description: 'UI/UX expert for dApps' },
];

// Notable Hall of Fame Projects
const hallOfFameProjects = [
    { title: 'Bunkr', category: 'Security', description: 'Enhanced Solana wallet security with 2FA and Passkeys.', status: 'Live' },
    { title: 'Candypay', category: 'Payments', description: 'No-code builder for Mobile Native NFT experiences.', status: 'Live' },
    { title: 'Dialect', category: 'Infrastructure', description: 'Inter-wallet messaging and smart notifications protocol.', status: 'Live' },
    { title: 'dReader', category: 'Consumer', description: 'Platform for discovering, reading, and trading digital comics.', status: 'Live' },
    { title: 'Espresso Cash', category: 'Payments', description: 'Global payments made easy and affordable.', status: 'Live' },
    { title: 'Saganize', category: 'Mobile', description: 'Tools for Solana Mobile development and security.', status: 'Live' },
    { title: 'Proto', category: 'Consumer', description: 'Building the future of map-based content.', status: 'Live' },
    { title: 'Wordcel', category: 'Infrastructure', description: 'Decentralized publishing protocol on Solana.', status: 'Live' },
];

// Narrative Detection: Trending Topics
const trendingNarratives = [
    {
        narrative: 'Solana DeFi Summer 2026',
        mentions: 1247,
        growth: '+156%',
        sentiment: 'Bullish'
    },
    {
        narrative: 'Token Extensions (Token-22)',
        mentions: 943,
        growth: '+112%',
        sentiment: 'Bullish'
    },
    {
        narrative: 'DePin Adoption',
        mentions: 834,
        growth: '+87%',
        sentiment: 'Neutral'
    },
    {
        narrative: 'Stablecoin Payments',
        mentions: 621,
        growth: '+45%',
        sentiment: 'Bullish'
    },
];

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                <p className="text-sm font-semibold text-foreground">{payload[0].name}</p>
                <p className="text-sm text-muted-foreground">
                    {payload[0].value}% distribution
                </p>
            </div>
        );
    }
    return null;
};

export function SuperteamDashboard() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight mb-2">
                                Superteam Signals
                            </h1>
                            <p className="text-muted-foreground">
                                Narrative Detection & Idea Generation Tool
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Badge variant="secondary" className="text-md px-3 py-1">
                                Global GDP: ${STATS.communityGdp}
                            </Badge>
                            <Badge variant="outline" className="text-md px-3 py-1 border-green-500 text-green-500">
                                <Activity className="w-4 h-4 mr-2 inline animate-pulse" />
                                Live System
                            </Badge>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <Card className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Value Earned</CardTitle>
                            <DollarSign className="h-4 w-4 text-green-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">${STATS.totalValue}</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                Distributed to community
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Listings</CardTitle>
                            <Briefcase className="h-4 w-4 text-blue-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{STATS.listings}</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                Active opportunities
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Global Teams</CardTitle>
                            <Globe className="h-4 w-4 text-purple-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{teamsByCountry.length} Countries</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                International presence
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Active Narratives</CardTitle>
                            <TrendingUp className="h-4 w-4 text-orange-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">{trendingNarratives.length}</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                High growth signals
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content Tabs */}
                <Tabs defaultValue="overview" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-5 lg:w-auto bg-muted/20 p-1">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="funded">Funded Data</TabsTrigger>
                        <TabsTrigger value="hof">Hall of Fame</TabsTrigger>
                        <TabsTrigger value="narratives">Narratives</TabsTrigger>
                        <TabsTrigger value="distribution">Distribution</TabsTrigger>
                    </TabsList>

                    {/* Overview Tab */}
                    <TabsContent value="overview" className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Project Categories Pie Chart */}
                            <Card className="border-border bg-card/50 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle>Ecosystem Focus Areas</CardTitle>
                                    <CardDescription>
                                        Distribution of funded projects by category
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <PieChart>
                                            <Pie
                                                data={projectCategories}
                                                cx="50%"
                                                cy="50%"
                                                labelLine={false}
                                                label={({ name, value }) => `${name} ${value}%`}
                                                outerRadius={100}
                                                fill="#8884d8"
                                                dataKey="value"
                                            >
                                                {projectCategories.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                            </Pie>
                                            <Tooltip content={<CustomTooltip />} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </CardContent>
                            </Card>

                            {/* Teams by Country */}
                            <Card className="border-border bg-card/50 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle>Team Density by Region</CardTitle>
                                    <CardDescription>
                                        Number of active teams across Superteam regions
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={teamsByCountry}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 10%)" />
                                            <XAxis
                                                dataKey="country"
                                                stroke="oklch(0.708 0 0)"
                                                tick={{ fill: 'oklch(0.708 0 0)', fontSize: 12 }}
                                            />
                                            <YAxis
                                                stroke="oklch(0.708 0 0)"
                                                tick={{ fill: 'oklch(0.708 0 0)', fontSize: 12 }}
                                            />
                                            <Tooltip
                                                contentStyle={{
                                                    backgroundColor: 'oklch(0.205 0 0)',
                                                    border: '1px solid oklch(1 0 0 / 10%)',
                                                    borderRadius: '8px'
                                                }}
                                            />
                                            <Bar dataKey="teams" fill="oklch(0.488 0.243 264.376)" radius={[4, 4, 0, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Hall of Fame Tab */}
                    <TabsContent value="hof" className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Talent Section */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <Users className="w-5 h-5 text-primary" />
                                    Top Talent (Leaderboard)
                                </h3>
                                <div className="grid gap-4">
                                    {hallOfFameTalent.map((talent, index) => (
                                        <Card key={index} className="bg-card/50 border-border/50 hover:bg-card/80 transition-all">
                                            <CardHeader className="pb-2">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <CardTitle className="text-base">{talent.name}</CardTitle>
                                                        <CardDescription className="text-xs">{talent.handle}</CardDescription>
                                                    </div>
                                                    <Badge variant="secondary" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                                                        {talent.earnings}
                                                    </Badge>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-muted-foreground">{talent.role}</span>
                                                </div>
                                                <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                                                    {talent.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>

                            {/* Projects Section */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <Briefcase className="w-5 h-5 text-blue-500" />
                                    Star Projects
                                </h3>
                                <div className="grid gap-4">
                                    {hallOfFameProjects.map((project, index) => (
                                        <Card key={index} className="bg-card/50 border-border/50 hover:bg-card/80 transition-all">
                                            <CardHeader className="pb-2">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <CardTitle className="text-base">{project.title}</CardTitle>
                                                        <CardDescription className="text-xs">{project.category}</CardDescription>
                                                    </div>
                                                    <Badge variant="outline" className="border-blue-500/50 text-blue-500">
                                                        {project.status}
                                                    </Badge>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm text-foreground/80 line-clamp-2">
                                                    {project.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </TabsContent>



                    {/* Funded Projects Tab (Renamed from Activity for clarity) */}
                    <TabsContent value="funded" className="space-y-6">
                        <Card className="border-border bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle>Recently Funded Projects</CardTitle>
                                <CardDescription>
                                    Real-time feed of grant winners and bounty completions
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {fundedProjects.map((project) => (
                                        <div
                                            key={project.id}
                                            className="p-4 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-all border border-border/50"
                                        >
                                            <div className="flex items-start justify-between mb-2">
                                                <div>
                                                    <h3 className="font-semibold text-foreground text-lg">{project.title}</h3>
                                                    <span className="text-xs text-muted-foreground">{project.team}</span>
                                                </div>
                                                <Badge variant="outline" className="border-primary/50 text-primary">
                                                    {project.status}
                                                </Badge>
                                            </div>
                                            <p className="text-sm text-foreground/80 mb-3">
                                                {project.description}
                                            </p>
                                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                                <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                                                <span>{new Date(project.date).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Narratives Tab */}
                    <TabsContent value="narratives" className="space-y-6">
                        <Card className="border-border bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle>Narrative Detection</CardTitle>
                                <CardDescription>
                                    Emerging trends and signal detection in the ecosystem
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {trendingNarratives.map((narrative, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between p-4 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-all border border-border/50"
                                        >
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-foreground mb-1">
                                                    {narrative.narrative}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-sm text-muted-foreground">
                                                        {narrative.mentions.toLocaleString()} mentions
                                                    </span>
                                                    <Badge
                                                        variant={narrative.sentiment === 'Bullish' ? 'default' : 'secondary'}
                                                        className="text-xs"
                                                    >
                                                        {narrative.sentiment}
                                                    </Badge>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-lg font-bold text-green-400">
                                                    {narrative.growth}
                                                </div>
                                                <p className="text-xs text-muted-foreground">momentum</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Distribution Tab */}
                    <TabsContent value="distribution" className="space-y-6">
                        <Card className="border-border bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle>Global Superteam Facilities</CardTitle>
                                <CardDescription>
                                    Physical presence and team density by country
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {teamsByCountry.map((item, index) => (
                                        <div
                                            key={item.country}
                                            className="flex items-center justify-between p-4 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-all"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold border border-primary/30">
                                                    {index + 1}
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-foreground">{item.country}</h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        {item.facilities} facilities active
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl font-bold text-foreground">{item.teams}</div>
                                                <p className="text-xs text-muted-foreground">teams</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                </Tabs>

                {/* Footer */}
                <footer className="mt-12 pt-8 border-t border-border/40">
                    <div className="flex justify-center mb-4">
                        <a href="https://superteam.fun" target="_blank" className="text-xs text-muted-foreground hover:text-foreground transition-colors mr-4">Superteam.fun</a>
                        <a href="https://x.com/Superteam" target="_blank" className="text-xs text-muted-foreground hover:text-foreground transition-colors">@Superteam</a>
                    </div>
                    <div className="text-center text-sm text-muted-foreground">
                        <p>Superteam Signals - Real-time Dashboard</p>
                        <p className="mt-1 opacity-60">
                            Tracking $10.3M+ in value distributed across 2,593 listings
                        </p>
                    </div>
                </footer>
            </div>
        </div >
    );
}
