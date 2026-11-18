import { Link, useLocation } from "react-router-dom";
import { Menu, Home, BookOpen, Activity, Trophy } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Trang chủ", icon: Home },
    { path: "/bai-hoc", label: "Bài học", icon: BookOpen },
    { path: "/bai-tap", label: "Bài tập", icon: Activity },
    { path: "/diem", label: "Điểm số", icon: Trophy },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-indigo-600">
            <BookOpen className="w-6 h-6" /> Tin học 4
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-50 text-indigo-600 border border-indigo-100"
                      : "text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
                  }`}
                >
                  <Icon className="w-4 h-4" /> {item.label}
                </Link>
              );
            })}
          </div>
          <div className="md:hidden">
            <button className="p-2 text-slate-600 hover:text-indigo-600">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
