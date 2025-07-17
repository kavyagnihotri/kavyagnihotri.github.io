
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BlogsPage from "./pages/BlogsPage";
import BlogPost from "./pages/BlogPost";
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
 * - "*" - 404 page for unmatched routes
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          {/* Main portfolio page */}
          <Route path="/" element={<Index />} />
          
          {/* Blog pages - separate from main page sections */}
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />
          
          {/* Catch-all route for 404 errors */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
