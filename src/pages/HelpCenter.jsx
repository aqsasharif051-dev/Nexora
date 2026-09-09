import React, { useState } from "react";
import {
  Search,
  BookOpen,
  FolderKanban,
  CheckSquare,
  Users,
  BarChart3,
  Settings,
  ChevronDown,
  MessageCircle,
  Mail,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

function HelpCenter() {
  const [openFaq, setOpenFaq] = useState(null);

  const categories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Learn the basics of Nexora and get started quickly.",
      articles: "8 articles",
    },
    {
      icon: FolderKanban,
      title: "Projects & Tasks",
      description: "Manage projects, tasks, deadlines and progress.",
      articles: "12 articles",
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Add members, assign work and manage your team.",
      articles: "7 articles",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Understand your project performance and reports.",
      articles: "6 articles",
    },
    {
      icon: Settings,
      title: "Account & Settings",
      description: "Manage your profile, preferences and security.",
      articles: "9 articles",
    },
    {
      icon: CheckSquare,
      title: "Tasks",
      description: "Create, organize and track your team's tasks.",
      articles: "10 articles",
    },
  ];

  const faqs = [
    {
      question: "How do I create a new project?",
      answer:
        "Click the New Project button from your dashboard or Projects page. Add the project name, description, deadline and team members, then save your project.",
    },
    {
      question: "How can I assign a task to a team member?",
      answer:
        "Open the Tasks page, create a new task and select a team member from the assignee field. You can also set the task priority and due date.",
    },
    {
      question: "How do I add a new team member?",
      answer:
        "Go to the Team page and click Add Member. Enter the member's information and assign their role before saving.",
    },
    {
      question: "Where can I view project analytics?",
      answer:
        "Open the Analytics page from the sidebar. You can view project activity, task completion, team performance and other useful statistics.",
    },
    {
      question: "How can I change my account settings?",
      answer:
        "Open Settings from the sidebar. From there you can update your profile, notifications, appearance and security preferences.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="dashboard help-center-page">

      {/* PAGE HEADER */}
      <div className="page-header help-header">
        <div>
          <p className="page-eyebrow">SUPPORT</p>

          <h1>Help Center</h1>

          <p className="page-description">
            Find answers, guides, and support for Nexora.
          </p>
        </div>
      </div>

      {/* HERO SEARCH */}
      <div className="help-hero">
        <div className="help-hero-content">
          <div className="help-hero-icon">
            <HelpCircle size={25} />
          </div>

          <h2>How can we help you?</h2>

          <p>
            Search our help center or browse the topics below.
          </p>

          <div className="help-search">
            <Search size={19} />

            <input
              type="text"
              placeholder="Search for help, guides, or questions..."
            />

            <button>Search</button>
          </div>
        </div>
      </div>

      {/* POPULAR TOPICS */}
      <div className="help-section">

        <div className="help-section-heading">
          <div>
            <h2>Browse by topic</h2>
            <p>Find helpful guides organized by category.</p>
          </div>
        </div>

        <div className="help-categories">

          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div className="help-category-card" key={index}>

                <div className="help-category-icon">
                  <Icon size={20} />
                </div>

                <div className="help-category-content">
                  <h3>{category.title}</h3>

                  <p>{category.description}</p>

                  <span>{category.articles}</span>
                </div>

                <ArrowRight
                  size={18}
                  className="help-category-arrow"
                />

              </div>
            );
          })}

        </div>
      </div>

      {/* FAQ */}
      <div className="help-section faq-section">

        <div className="help-section-heading">
          <div>
            <h2>Frequently asked questions</h2>
            <p>Quick answers to common questions.</p>
          </div>
        </div>

        <div className="faq-list">

          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${
                openFaq === index ? "open" : ""
              }`}
              key={index}
            >

              <button
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>

                <ChevronDown
                  size={19}
                  className="faq-chevron"
                />
              </button>

              {openFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}

            </div>
          ))}

        </div>
      </div>

      {/* CONTACT SUPPORT */}
      <div className="support-card">

        <div className="support-card-left">

          <div className="support-icon">
            <MessageCircle size={22} />
          </div>

          <div>
            <h2>Still need help?</h2>

            <p>
              Our support team is ready to help you with any questions.
            </p>
          </div>

        </div>

        <div className="support-actions">

          <button className="support-email-btn">
            <Mail size={17} />
            Contact Support
          </button>

        </div>

      </div>

    </section>
  );
}

export default HelpCenter;