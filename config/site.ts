export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Fakiture App",
	description: "Compose invoices with elaborate simplicity.",
	navItems: [
		{
			label: "Compose",
			href: "/compose",
		},
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/orgs/sam-squad/repositories",
	},
};
