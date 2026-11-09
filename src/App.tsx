
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BlogsPage from "./pages/BlogsPage";
import BlogPost from "./pages/BlogPost";
import ArtPage from "./pages/ArtPage";
import ProjectsPage from "./pages/ProjectsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/**
 * Main App Component
 * 
 * This is the root component that sets up:
 * - React Query for data fetching
 * - Tooltip provider for UI components
 * - Toast notifications
 * - Routing configuration
 * 
 * Routes:
 * - "/" - Main portfolio page
 * - "/blogs" - Blog listing page
 * - "/blogs/:slug" - Individual blog post
 * - "/art" - Artworks I like
 * - "*" - 404 page for unmatched routes
 */
const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <Routes>
          {/* Main portfolio page */}
          <Route path="/" element={<Index />} />
          
          {/* Blog pages - separate from main page sections */}
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />

          {/* Artworks I like */}
          <Route path="/art" element={<ArtPage />} />
          
          {/* Unlisted projects page (linked from footer only) */}
          <Route path="/projects" element={<ProjectsPage />} />

          {/* Catch-all route for 404 errors */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </ThemeProvider>
);

export default App;
