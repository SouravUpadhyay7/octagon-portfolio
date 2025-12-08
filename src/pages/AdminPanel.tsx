import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  User,
  FileText,
  Briefcase,
  Award,
  Image,
  Settings,
  LogOut,
  Save,
  Plus,
  Trash2,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import { toast } from "sonner";
import { getContent, saveContent, SiteContent, defaultContent } from "@/data/content";

type TabType = "about" | "publications" | "experience" | "research" | "achievements" | "gallery" | "supervision";

export const AdminPanel = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>("about");
  const [content, setContent] = useState<SiteContent>(getContent());
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("adminAuth");
    if (!isAuthenticated) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      saveContent(content);
      toast.success("Changes saved successfully!");
      setIsSaving(false);
    }, 500);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuth");
    navigate("/admin/login");
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset all content to defaults?")) {
      setContent(defaultContent);
      saveContent(defaultContent);
      toast.success("Content reset to defaults");
    }
  };

  const tabs = [
    { id: "about" as TabType, label: "About", icon: User },
    { id: "publications" as TabType, label: "Publications", icon: FileText },
    { id: "experience" as TabType, label: "Experience", icon: Briefcase },
    { id: "research" as TabType, label: "Research", icon: BookOpen },
    { id: "supervision" as TabType, label: "Supervision", icon: GraduationCap },
    { id: "achievements" as TabType, label: "Achievements", icon: Award },
    { id: "gallery" as TabType, label: "Gallery", icon: Image },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Settings className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold">Admin Panel</h1>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" className="text-sm text-muted-foreground hover:text-foreground">
              View Website
            </a>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-sm text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="container max-w-7xl px-4 py-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-1 sticky top-24">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                    activeTab === tab.id
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
              <hr className="my-4 border-border" />
              <button
                onClick={handleReset}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all"
              >
                <Trash2 className="w-5 h-5" />
                <span>Reset All</span>
              </button>
            </nav>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-4">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="academic-card"
            >
              {activeTab === "about" && (
                <AboutEditor content={content} setContent={setContent} />
              )}
              {activeTab === "publications" && (
                <PublicationsEditor content={content} setContent={setContent} />
              )}
              {activeTab === "experience" && (
                <ExperienceEditor content={content} setContent={setContent} />
              )}
              {activeTab === "research" && (
                <ResearchEditor content={content} setContent={setContent} />
              )}
              {activeTab === "supervision" && (
                <SupervisionEditor content={content} setContent={setContent} />
              )}
              {activeTab === "achievements" && (
                <AchievementsEditor content={content} setContent={setContent} />
              )}
              {activeTab === "gallery" && (
                <GalleryEditor content={content} setContent={setContent} />
              )}
            </motion.div>

            {/* Save Button */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all disabled:opacity-50"
              >
                <Save className="w-5 h-5" />
                {isSaving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Editor Components
interface EditorProps {
  content: SiteContent;
  setContent: (content: SiteContent) => void;
}

const AboutEditor = ({ content, setContent }: EditorProps) => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold">About Section</h2>
    <div>
      <label className="block text-sm font-medium mb-2">Profile Image URL</label>
      <input
        type="text"
        value={content.profileImage}
        onChange={(e) => setContent({ ...content, profileImage: e.target.value })}
        placeholder="Leave empty for default image"
        className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
    </div>
    <div>
      <label className="block text-sm font-medium mb-2">About Text</label>
      <textarea
        value={content.about}
        onChange={(e) => setContent({ ...content, about: e.target.value })}
        rows={6}
        className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
      />
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          value={content.contact.email}
          onChange={(e) =>
            setContent({
              ...content,
              contact: { ...content.contact, email: e.target.value },
            })
          }
          className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">LinkedIn URL</label>
        <input
          type="url"
          value={content.contact.linkedin}
          onChange={(e) =>
            setContent({
              ...content,
              contact: { ...content.contact, linkedin: e.target.value },
            })
          }
          className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium mb-2">Office Address</label>
      <textarea
        value={content.contact.address}
        onChange={(e) =>
          setContent({
            ...content,
            contact: { ...content.contact, address: e.target.value },
          })
        }
        rows={2}
        className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
      />
    </div>
  </div>
);

const PublicationsEditor = ({ content, setContent }: EditorProps) => {
  const addPublication = () => {
    setContent({
      ...content,
      publications: [
        ...content.publications,
        {
          id: `pub-${Date.now()}`,
          title: "",
          journal: "",
          year: new Date().getFullYear(),
          doi: "",
        },
      ],
    });
  };

  const removePublication = (id: string) => {
    setContent({
      ...content,
      publications: content.publications.filter((p) => p.id !== id),
    });
  };

  const updatePublication = (id: string, field: string, value: string | number) => {
    setContent({
      ...content,
      publications: content.publications.map((p) =>
        p.id === id ? { ...p, [field]: value } : p
      ),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Publications</h2>
        <button
          onClick={addPublication}
          className="flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Publication
        </button>
      </div>
      <div className="space-y-4">
        {content.publications.map((pub) => (
          <div key={pub.id} className="p-4 bg-muted/30 rounded-lg space-y-3">
            <div className="flex items-start justify-between">
              <input
                type="text"
                value={pub.title}
                onChange={(e) => updatePublication(pub.id, "title", e.target.value)}
                placeholder="Publication Title"
                className="flex-1 px-3 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                onClick={() => removePublication(pub.id)}
                className="ml-2 p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-3">
              <input
                type="text"
                value={pub.journal}
                onChange={(e) => updatePublication(pub.id, "journal", e.target.value)}
                placeholder="Journal/Conference"
                className="px-3 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="number"
                value={pub.year}
                onChange={(e) => updatePublication(pub.id, "year", parseInt(e.target.value))}
                placeholder="Year"
                className="px-3 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="text"
                value={pub.doi}
                onChange={(e) => updatePublication(pub.id, "doi", e.target.value)}
                placeholder="DOI"
                className="px-3 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExperienceEditor = ({ content, setContent }: EditorProps) => {
  const addExperience = () => {
    setContent({
      ...content,
      experiences: [
        ...content.experiences,
        {
          id: `exp-${Date.now()}`,
          title: "",
          organization: "",
          location: "",
          period: "",
          current: false,
        },
      ],
    });
  };

  const removeExperience = (id: string) => {
    setContent({
      ...content,
      experiences: content.experiences.filter((e) => e.id !== id),
    });
  };

  const updateExperience = (id: string, field: string, value: string | boolean) => {
    setContent({
      ...content,
      experiences: content.experiences.map((e) =>
        e.id === id ? { ...e, [field]: value } : e
      ),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Experience</h2>
        <button
          onClick={addExperience}
          className="flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Experience
        </button>
      </div>
      <div className="space-y-4">
        {content.experiences.map((exp) => (
          <div key={exp.id} className="p-4 bg-muted/30 rounded-lg space-y-3">
            <div className="flex items-start justify-between">
              <input
                type="text"
                value={exp.title}
                onChange={(e) => updateExperience(exp.id, "title", e.target.value)}
                placeholder="Position Title"
                className="flex-1 px-3 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                onClick={() => removeExperience(exp.id)}
                className="ml-2 p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-3">
              <input
                type="text"
                value={exp.organization}
                onChange={(e) => updateExperience(exp.id, "organization", e.target.value)}
                placeholder="Organization"
                className="px-3 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="text"
                value={exp.location}
                onChange={(e) => updateExperience(exp.id, "location", e.target.value)}
                placeholder="Location"
                className="px-3 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="text"
                value={exp.period}
                onChange={(e) => updateExperience(exp.id, "period", e.target.value)}
                placeholder="Period (e.g., 2020 - Present)"
                className="px-3 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={exp.current}
                onChange={(e) => updateExperience(exp.id, "current", e.target.checked)}
                className="w-4 h-4 rounded border-border"
              />
              <span className="text-sm text-muted-foreground">Current Position</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

const ResearchEditor = ({ content, setContent }: EditorProps) => {
  const [newInterest, setNewInterest] = useState("");

  const addInterest = () => {
    if (newInterest.trim()) {
      setContent({
        ...content,
        researchInterests: [...content.researchInterests, newInterest.trim()],
      });
      setNewInterest("");
    }
  };

  const removeInterest = (index: number) => {
    setContent({
      ...content,
      researchInterests: content.researchInterests.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Research Interests</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={newInterest}
          onChange={(e) => setNewInterest(e.target.value)}
          placeholder="Add new research interest"
          onKeyDown={(e) => e.key === "Enter" && addInterest()}
          className="flex-1 px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <button
          onClick={addInterest}
          className="px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {content.researchInterests.map((interest, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full"
          >
            <span>{interest}</span>
            <button
              onClick={() => removeInterest(index)}
              className="hover:text-destructive transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const SupervisionEditor = ({ content, setContent }: EditorProps) => {
  const addSupervision = () => {
    setContent({
      ...content,
      supervisions: [
        ...content.supervisions,
        {
          id: `sup-${Date.now()}`,
          category: "btech",
          title: "",
          student: "",
          year: "",
          status: "ongoing",
        },
      ],
    });
  };

  const removeSupervision = (id: string) => {
    setContent({
      ...content,
      supervisions: content.supervisions.filter((s) => s.id !== id),
    });
  };

  const updateSupervision = (id: string, field: string, value: string) => {
    setContent({
      ...content,
      supervisions: content.supervisions.map((s) =>
        s.id === id ? { ...s, [field]: value } : s
      ),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Academic Supervision</h2>
        <button
          onClick={addSupervision}
          className="flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Entry
        </button>
      </div>
      <div className="space-y-4">
        {content.supervisions.map((sup) => (
          <div key={sup.id} className="p-4 bg-muted/30 rounded-lg space-y-3">
            <div className="flex items-start justify-between">
              <input
                type="text"
                value={sup.title}
                onChange={(e) => updateSupervision(sup.id, "title", e.target.value)}
                placeholder="Project/Thesis Title"
                className="flex-1 px-3 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                onClick={() => removeSupervision(sup.id)}
                className="ml-2 p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <div className="grid md:grid-cols-4 gap-3">
              <select
                value={sup.category}
                onChange={(e) => updateSupervision(sup.id, "category", e.target.value)}
                className="px-3 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="phd">PhD</option>
                <option value="mtech">M.Tech</option>
                <option value="btech">B.Tech</option>
              </select>
              <input
                type="text"
                value={sup.student}
                onChange={(e) => updateSupervision(sup.id, "student", e.target.value)}
                placeholder="Student Name"
                className="px-3 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="text"
                value={sup.year}
                onChange={(e) => updateSupervision(sup.id, "year", e.target.value)}
                placeholder="Year"
                className="px-3 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <select
                value={sup.status}
                onChange={(e) => updateSupervision(sup.id, "status", e.target.value)}
                className="px-3 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AchievementsEditor = ({ content, setContent }: EditorProps) => {
  const addAchievement = () => {
    setContent({
      ...content,
      achievements: [
        ...content.achievements,
        {
          id: `ach-${Date.now()}`,
          title: "",
          description: "",
          year: "",
          category: "award",
        },
      ],
    });
  };

  const removeAchievement = (id: string) => {
    setContent({
      ...content,
      achievements: content.achievements.filter((a) => a.id !== id),
    });
  };

  const updateAchievement = (id: string, field: string, value: string) => {
    setContent({
      ...content,
      achievements: content.achievements.map((a) =>
        a.id === id ? { ...a, [field]: value } : a
      ),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Achievements</h2>
        <button
          onClick={addAchievement}
          className="flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Achievement
        </button>
      </div>
      <div className="space-y-4">
        {content.achievements.map((ach) => (
          <div key={ach.id} className="p-4 bg-muted/30 rounded-lg space-y-3">
            <div className="flex items-start justify-between">
              <input
                type="text"
                value={ach.title}
                onChange={(e) => updateAchievement(ach.id, "title", e.target.value)}
                placeholder="Achievement Title"
                className="flex-1 px-3 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                onClick={() => removeAchievement(ach.id)}
                className="ml-2 p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <textarea
              value={ach.description}
              onChange={(e) => updateAchievement(ach.id, "description", e.target.value)}
              placeholder="Description"
              rows={2}
              className="w-full px-3 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
            <div className="grid md:grid-cols-2 gap-3">
              <input
                type="text"
                value={ach.year}
                onChange={(e) => updateAchievement(ach.id, "year", e.target.value)}
                placeholder="Year"
                className="px-3 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <select
                value={ach.category}
                onChange={(e) => updateAchievement(ach.id, "category", e.target.value)}
                className="px-3 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="award">Award</option>
                <option value="grant">Grant</option>
                <option value="talk">Invited Talk</option>
                <option value="recognition">Recognition</option>
                <option value="collaboration">Collaboration</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const GalleryEditor = ({ content, setContent }: EditorProps) => {
  const addGalleryItem = () => {
    setContent({
      ...content,
      gallery: [
        ...content.gallery,
        {
          id: `gal-${Date.now()}`,
          title: "",
          description: "",
          image: "",
          date: "",
        },
      ],
    });
  };

  const removeGalleryItem = (id: string) => {
    setContent({
      ...content,
      gallery: content.gallery.filter((g) => g.id !== id),
    });
  };

  const updateGalleryItem = (id: string, field: string, value: string) => {
    setContent({
      ...content,
      gallery: content.gallery.map((g) =>
        g.id === id ? { ...g, [field]: value } : g
      ),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Gallery</h2>
        <button
          onClick={addGalleryItem}
          className="flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Image
        </button>
      </div>
      <div className="space-y-4">
        {content.gallery.map((item) => (
          <div key={item.id} className="p-4 bg-muted/30 rounded-lg space-y-3">
            <div className="flex items-start justify-between">
              <input
                type="text"
                value={item.title}
                onChange={(e) => updateGalleryItem(item.id, "title", e.target.value)}
                placeholder="Image Title"
                className="flex-1 px-3 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                onClick={() => removeGalleryItem(item.id)}
                className="ml-2 p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <input
              type="text"
              value={item.image}
              onChange={(e) => updateGalleryItem(item.id, "image", e.target.value)}
              placeholder="Image URL (leave empty for default)"
              className="w-full px-3 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <div className="grid md:grid-cols-2 gap-3">
              <input
                type="text"
                value={item.description}
                onChange={(e) => updateGalleryItem(item.id, "description", e.target.value)}
                placeholder="Description"
                className="px-3 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="text"
                value={item.date}
                onChange={(e) => updateGalleryItem(item.id, "date", e.target.value)}
                placeholder="Date"
                className="px-3 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
