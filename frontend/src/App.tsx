"use client";

import "./styles/globals.css";
import { useState } from "react";
import { Header } from "./shared/layout/Header";
import { Footer } from "./shared/layout/Footer";

// Pages
import HomePage from "./_pages/index";
import ExplorePage from "./_pages/explore";
import CategoryPage from "./_pages/category";
import PatternPage from "./_pages/pattern";
import DemoPage from "./_pages/demo";
import EditorPage from "./_pages/editor";
import MyDemosPage from "./_pages/my-demos";
import FavoritesPage from "./_pages/favorites";
import ProfilePage from "./_pages/profile";
import LoginPage from "./_pages/login";
import SignupPage from "./_pages/signup";
import TrendsPage from "./_pages/trends";
import TrendDetailPage from "./_pages/trend-detail";
import CreateTrendPage from "./_pages/create-trend";
import TrendReportPage from "./_pages/trend-report";
import TrendFlashPage from "./_pages/trend-flash";
import CodeFlashPage from "./_pages/code-flash";
import ProjectArchivePage from "./_pages/project-archive";
import ProjectDetailPage from "./_pages/project-detail";
import GameSelectPage from "./_pages/game-select";
import QuestionTypeSelectPage from "./_pages/question-type-select";
import GamePlayPage from "./_pages/game-play";
import GameSummaryPage from "./_pages/game-summary";
import LevelTestPage from "./_pages/level-test";
import ResourcesPage from "./_pages/resources";
import TrendResearchPage from "./_pages/trend-research";
import CommunityContestPage from "./_pages/community-contest";
import AdminReviewPage from "./_pages/admin-review";
import AdminDashboardPage from "./_pages/admin-dashboard";
import PlayPage from "./_pages/play";
import BuildPage from "./_pages/build";
import BuildEntryPage from "./_pages/build-entry";
import RoadmapGeneratorPage from "./_pages/roadmap-generator";
import PortfolioManagerPage from "./_pages/portfolio-manager";
import MyPage from "./_pages/mypage";
import NotificationsPage from "./_pages/notifications";
import PremiumPage from "./_pages/premium";
import AIGeneratePage from "./_pages/ai-generate";
import ResourceDetailPage from "./_pages/resource-detail";
import LearningHubPage from "./_pages/learning-hub";

export default function App() {
  const [currentView, setCurrentView] = useState<string>("login");
  const [viewParams, setViewParams] = useState<any>({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleNavigate = (page: string, params?: any) => {
    setCurrentView(page);
    if (params) {
      setViewParams(params);
    }
  };

  const handleLogin = (asAdmin?: boolean) => {
    setIsLoggedIn(true);
    if (asAdmin) {
      setIsAdmin(true);
      setCurrentView("admin-dashboard");
    } else {
      setCurrentView("home");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setCurrentView("login");
  };

  if (!isLoggedIn && (currentView === "login" || currentView === "signup")) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
         {currentView === "login" ? (
           <LoginPage onNavigate={handleNavigate} onLogin={handleLogin} />
         ) : (
           <SignupPage onNavigate={handleNavigate} onSignup={() => handleLogin(false)} />
         )}
      </div>
    );
  }

  // Admin Dashboard takes over the full screen (no global header/footer)
  if (isLoggedIn && isAdmin && currentView === "admin-dashboard") {
    return <AdminDashboardPage onNavigate={handleNavigate} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header 
        onNavigate={handleNavigate} 
        isLoggedIn={isLoggedIn} 
        onLogout={handleLogout}
        isAdmin={isAdmin}
      />

      <main className="flex-1">
        {currentView === "home" && <HomePage onNavigate={handleNavigate} />}
        {currentView === "play" && <PlayPage onNavigate={handleNavigate} />}
        {currentView === "build" && <BuildPage onNavigate={handleNavigate} />}
        {currentView === "explore" && <ExplorePage onNavigate={handleNavigate} />}
        {currentView === "category" && <CategoryPage onNavigate={handleNavigate} />}
        {currentView === "pattern" && <PatternPage onNavigate={handleNavigate} />}
        {currentView === "demo" && <DemoPage onNavigate={handleNavigate} />}
        {currentView === "editor" && <EditorPage onNavigate={handleNavigate} />}
        {currentView === "my-demos" && <MyDemosPage onNavigate={handleNavigate} />}
        {currentView === "favorites" && <FavoritesPage onNavigate={handleNavigate} />}
        {currentView === "mypage" && <ProfilePage onNavigate={handleNavigate} />}
        
        {/* Fallback for routes not explicitly in the new list but linked in UI */}
        {currentView === "trends" && <TrendsPage onNavigate={handleNavigate} />}
        {currentView === "project-archive" && <ProjectArchivePage onNavigate={handleNavigate} />}
        {currentView === "project-detail" && <ProjectDetailPage onNavigate={handleNavigate} id={viewParams.id} type={viewParams.type} />}
        {currentView === "game-select" && <GameSelectPage onNavigate={handleNavigate} />}
        {currentView === "question-type-select" && <QuestionTypeSelectPage onNavigate={handleNavigate} gameId={viewParams.gameId} />}
        {currentView === "game-play" && <GamePlayPage onNavigate={handleNavigate} gameId={viewParams.gameId} type={viewParams.type} />}
        {currentView === "game-summary" && <GameSummaryPage onNavigate={handleNavigate} score={viewParams.score} total={viewParams.total} gameId={viewParams.gameId} />}
        {currentView === "level-test" && <LevelTestPage onNavigate={handleNavigate} />}
        {currentView === "resources" && <ResourcesPage onNavigate={handleNavigate} />}
        {currentView === "resource-detail" && <ResourceDetailPage onNavigate={handleNavigate} id={viewParams.id} type={viewParams.type} />}
        {currentView === "trend-research" && <TrendResearchPage onNavigate={handleNavigate} />}
        {currentView === "community-contest" && <CommunityContestPage onNavigate={handleNavigate} />}
        {currentView === "admin-review" && <AdminReviewPage onNavigate={handleNavigate} onLogout={handleLogout} />}
        {currentView === "build-entry" && <BuildEntryPage onNavigate={handleNavigate} />}
        {currentView === "roadmap-generator" && <RoadmapGeneratorPage onNavigate={handleNavigate} />}
        {currentView === "portfolio-manager" && <PortfolioManagerPage onNavigate={handleNavigate} />}
        {currentView === "mypage" && <ProfilePage onNavigate={handleNavigate} />}
        {currentView === "notifications" && <NotificationsPage onNavigate={handleNavigate} />}
        {currentView === "premium" && <PremiumPage onNavigate={handleNavigate} />}
        {currentView === "ai-generate" && <AIGeneratePage onNavigate={handleNavigate} />}
        {currentView === "learning-hub" && <LearningHubPage onNavigate={handleNavigate} />}
        {currentView === "trend-detail" && <TrendDetailPage onNavigate={handleNavigate} id={viewParams.id} type={viewParams.type} />}
        {currentView === "create-trend" && <CreateTrendPage onNavigate={handleNavigate} />}
        {currentView === "trend-report" && <TrendReportPage onNavigate={handleNavigate} />}
        {currentView === "trend-flash" && <TrendFlashPage onNavigate={handleNavigate} />}
        {currentView === "code-flash" && <CodeFlashPage onNavigate={handleNavigate} />}
      </main>

      <Footer />
    </div>
  );
}

