// lib/services.ts
import { Service } from '@/types/services';

export const ALL_SERVICES: Service[] = [
  {
    id: 1,
    slug: "virtual-cfo",
    category: "Finance",
    tag: "Executive Finance",
    title: "Virtual CFO",
    shortDesc:
      "Enterprise-grade financial leadership — strategy, forecasting, treasury, and board-quality reporting without the full-time executive cost.",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "CFO strategy session",
    roundedCorners: "tl-br",
    gridClassFull: "col-span-12 md:col-span-5 md:row-span-2",
    fullContent: {
      heroSubtitle: "Transform financial chaos into strategic clarity",
      description:
        "Go beyond bookkeeping. We provide enterprise-grade financial leadership.",
      keyBenefits: [
        "Strategic financial planning and oversight",
        "Financial reporting and stakeholder communication",
        "Budgeting, forecasting, and performance management",
        "Profitability optimization and product portfolio review",
        "Pricing strategy and revenue model design",
        "Treasury and working capital strategy",
        "Procurement, vendor strategy, and cost leadership",
        "Executive MIS and decision support",
      ],
      outcomes:
        "Enterprise-wide financial mastery that drives profitability, liquidity, risk mitigation, and accelerated business performance.",
    },
  },

  {
    id: 2,
    slug: "virtual-coo",
    category: "Operations",
    tag: "Operations",
    title: "Virtual COO",
    shortDesc:
      "Streamlined operations, cost leadership, and scalable execution — without the full-time overhead.",
    image:
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Operations management",
    roundedCorners: "tr-bl",
    gridClassFull: "col-span-12 md:col-span-3",
    fullContent: {
      heroSubtitle: "Operational excellence without full-time executive costs",
      description:
        "End-to-end operations oversight aligned with strategic business objectives.",
      keyBenefits: [
        "End-to-end operations oversight",
        "Financial and operational reporting integration",
        "Budget execution and performance control",
        "Product/service costing and profitability management",
        "Pricing execution and margin protection",
        "Working capital and supply chain optimization",
        "Vendor management and procurement excellence",
        "MIS and cross-functional insights",
      ],
      outcomes:
        "Streamlined operations, cost leadership, superior execution, and sustainable scalability that powers business growth.",
    },
  },

  {
    id: 3,
    slug: "virtual-chro",
    category: "Operations",
    tag: "People Strategy",
    title: "Virtual CHRO",
    shortDesc:
      "Build people systems that attract, engage, and retain global talent.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "HR strategy meeting",
    roundedCorners: "tl-br",
    gridClassFull: "col-span-12 md:col-span-4",
    fullContent: {
      heroSubtitle:
        "Build people systems that attract, engage, and retain global talent",
      description:
        "Strategic HR leadership to align workforce performance with business goals.",
      keyBenefits: [
        "Talent strategy and workforce planning",
        "HR financial oversight and reporting",
        "HR budgeting, forecasting, and performance analytics",
        "Employee value proposition and compensation benchmarking",
        "Performance management and talent optimization",
        "Employee lifecycle and engagement optimization",
        "Compliance and labor law management",
        "HR analytics and leadership insights",
      ],
      outcomes:
        "High-performance culture, optimized talent costs, regulatory compliance, and human capital that drives business success globally.",
    },
  },

  {
    id: 4,
    slug: "internal-audit-risk-management",
    category: "Risk & Audit",
    tag: "Risk Management",
    title: "Internal Audit and Risk Management",
    shortDesc:
      "Proactive risk intelligence before problems escalate with stronger controls and compliance assurance.",
    image:
      "https://images.pexels.com/photos/6693650/pexels-photo-6693650.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Audit and compliance review",
    roundedCorners: "tr-bl",
    gridClassFull: "col-span-12 md:col-span-4",
    fullContent: {
      heroSubtitle: "Proactive risk intelligence before problems escalate",
      description:
        "Strengthen internal controls, reduce fraud risks, and ensure audit readiness.",
      keyBenefits: [
        "Financial statement audits",
        "Budget variance analysis and performance audits",
        "Inventory and stock verification processes",
        "Receivables/payables audit trails",
        "Procurement and vendor payment audits",
        "Payroll and statutory compliance audits",
        "Tax compliance verification",
        "IT systems and process controls audit",
      ],
      outcomes:
        "Strong internal controls, fraud prevention, process optimization, and audit-ready financials that enhance stakeholder confidence.",
    },
  },

  {
    id: 5,
    slug: "business-process-reengineering",
    category: "Operations",
    tag: "Transformation",
    title: "Business Process Reengineering",
    shortDesc:
      "Transform inefficient workflows into lean, scalable, world-class processes.",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Business process transformation",
    roundedCorners: "tl-br",
    gridClassFull: "col-span-12 md:col-span-3 md:row-span-2",
    fullContent: {
      heroSubtitle:
        "From inefficient workflows to lean, scalable, world-class processes",
      description:
        "Redesign and optimize business operations for efficiency and scalability.",
      keyBenefits: [
        "Process identification and prioritization",
        "Current state process mapping and auditing",
        "Baseline performance measurement",
        "Future state process design",
        "Cost-to-serve and profitability redesign",
        "Working capital process transformation",
        "Vendor ecosystem and procurement reengineering",
        "Change implementation and performance monitoring",
      ],
      outcomes:
        "40-70% process efficiency gains, dramatic cost reductions, faster decision cycles, and competitive business transformation.",
    },
  },

  {
    id: 6,
    slug: "virtual-cost-accountant-supply-chain-management",
    category: "Finance",
    tag: "Cost Optimization",
    title: "Virtual Cost Accountant and Supply Chain Management",
    shortDesc:
      "Precision costing, margin clarity, and supply chain optimization for scalable profitability.",
    image:
      "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Supply chain operations",
    roundedCorners: "tr-bl",
    gridClassFull: "col-span-12 md:col-span-5",
    fullContent: {
      heroSubtitle:
        "Precision costing, margin clarity, supply chain optimization",
      description:
        "Gain cost transparency and operational efficiency across the supply chain.",
      keyBenefits: [
        "Cost accounting and financial oversight",
        "Standard costing, variance analysis, and reporting",
        "Budgeting, forecasting, and supply chain performance control",
        "Product costing and profitability analysis",
        "Pricing and margin management across supply chain",
        "Working capital optimization in supply chain",
        "Vendor payment cycles and procurement controls",
        "Supply chain MIS and analytics",
      ],
      outcomes:
        "Leaner supply chain costs, optimized inventory, improved working capital, and profitable operations at scale.",
    },
  },

  {
    id: 7,
    slug: "virtual-accounts-finance-manager",
    category: "Finance",
    tag: "Financial Management",
    title: "Virtual Accounts and Finance Manager",
    shortDesc:
      "Comprehensive financial oversight and real-time performance management.",
    image:
      "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Finance reporting dashboard",
    roundedCorners: "tl-br",
    gridClassFull: "col-span-12 md:col-span-4",
    fullContent: {
      heroSubtitle:
        "Comprehensive financial oversight and performance management",
      description:
        "End-to-end financial management to strengthen profitability and control.",
      keyBenefits: [
        "Financial accounting and reporting",
        "Record and reconcile financial transactions",
        "Budgeting and forecasting support",
        "Product costing and profitability assessments",
        "Pricing and margin monitoring",
        "Cash flow management",
        "Vendor payments and expense controls",
        "MIS reporting and dashboards",
      ],
      outcomes:
        "Real-time financial control, improved cash flow, and data-driven insights that strengthen profitability.",
    },
  },

  {
    id: 8,
    slug: "virtual-accountant-services",
    category: "Finance",
    tag: "Core Accounting",
    title: "Virtual Accountant Services",
    shortDesc:
      "Reliable accounting operations with precision, compliance, and financial clarity.",
    image:
      "https://images.pexels.com/photos/4386398/pexels-photo-4386398.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Accounting services",
    roundedCorners: "tr-bl",
    gridClassFull: "col-span-12 md:col-span-5 md:row-span-2",
    fullContent: {
      heroSubtitle:
        "Core accounting operations with precision and compliance",
      description:
        "Ensure accurate accounting, reporting, and compliance management.",
      keyBenefits: [
        "End-to-end accounting operations",
        "Transaction recording and reconciliations",
        "Budgeting and forecasting support",
        "Product costing and profitability analysis",
        "Pricing and margin monitoring",
        "Cash flow optimization",
        "Vendor payment and expense controls",
        "MIS reports and dashboards",
      ],
      outcomes:
        "Real-time financial control, improved cash flow, and actionable insights for better decision-making.",
    },
  },

  {
    id: 9,
    slug: "tax-planning",
    category: "Tax",
    tag: "Tax Strategy",
    title: "Tax Planning",
    shortDesc:
      "Strategic GST and Income Tax optimization to improve profitability and compliance.",
    image:
      "https://images.pexels.com/photos/6863256/pexels-photo-6863256.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Tax planning strategy",
    roundedCorners: "tl-br",
    gridClassFull: "col-span-12 md:col-span-3",
    fullContent: {
      heroSubtitle:
        "Strategic tax optimization for enhanced profitability",
      description:
        "Reduce tax leakages and improve post-tax profitability through structured planning.",
      keyBenefits: [
        "Comprehensive tax position review",
        "Tax-efficient business structuring",
        "GST planning and optimization",
        "Income Tax planning",
        "Tax impact analysis for strategic decisions",
        "Contract and invoice tax reviews",
        "Periodic tax MIS and review meetings",
        "Statutory notice and assessment handling",
      ],
      outcomes:
        "Tax-optimized operations, reduced penalties, and stronger post-tax profitability and cash flow.",
    },
  },

  {
    id: 10,
    slug: "ai-driven-accounting-business-process-automation",
    category: "Technology",
    tag: "AI & Automation",
    title: "AI-Driven Accounting and Business Process Automation",
    shortDesc:
      "Intelligent, AI-powered finance operations with real-time insights and automation.",
    image:
      "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "AI-powered finance automation",
    roundedCorners: "tr-bl",
    gridClassFull: "col-span-12 md:col-span-4",
    fullContent: {
      heroSubtitle:
        "Intelligent, always-on finance operations powered by artificial intelligence",
      description:
        "Automate financial operations and accelerate decision-making using AI.",
      keyBenefits: [
        "AI-powered financial data capture and posting",
        "Smart reconciliations and anomaly detection",
        "Automated budgeting and forecasting alerts",
        "AI-based product costing insights",
        "Dynamic pricing and margin intelligence",
        "AI-driven working capital optimization",
        "Automated vendor and expense workflows",
        "Real-time MIS and insight dashboards",
      ],
      outcomes:
        "Always-on intelligent finance operations that improve accuracy, accelerate decisions, and enhance profitability.",
    },
  },

  {
    id: 11,
    slug: "statutory-compliance-management",
    category: "Compliance",
    tag: "Regulatory Compliance",
    title: "Statutory Compliance Management",
    shortDesc:
      "Comprehensive statutory compliance management across GST, Income Tax, ROC, and payroll.",
    image:
      "https://images.pexels.com/photos/8111884/pexels-photo-8111884.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Compliance documentation",
    roundedCorners: "tl-br",
    gridClassFull: "col-span-12 md:col-span-4",
    fullContent: {
      heroSubtitle: "100% compliance adherence across jurisdictions",
      description:
        "Ensure seamless compliance and eliminate regulatory risks.",
      keyBenefits: [
        "GST compliance management",
        "Income Tax compliance",
        "Payroll statutory compliances",
        "ROC compliance management",
        "Contract and transaction tax reviews",
        "Audit-ready documentation preparation",
        "Compliance MIS and deadline tracking",
        "Handling statutory notices and proceedings",
      ],
      outcomes:
        "100% statutory adherence, seamless audits, zero penalties, and peace of mind for business operations.",
    },
  },

  {
    id: 12,
    slug: "pre-ipo-readiness-services",
    category: "Finance",
    tag: "IPO Readiness",
    title: "Pre-IPO Readiness Services",
    shortDesc:
      "Prepare your business for capital markets with structured financial and operational readiness.",
    image:
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "IPO preparation strategy",
    roundedCorners: "tr-bl",
    gridClassFull: "col-span-12 md:col-span-3 md:row-span-2",
    fullContent: {
      heroSubtitle: "Prepare for capital markets with confidence",
      description:
        "Build investor confidence with clean financials and operational readiness.",
      keyBenefits: [
        "Financial restructuring and audit cleanup",
        "Statutory compliance and ROC filings",
        "IPO budgeting and projections",
        "Product profitability and pricing review",
        "Promoter shareholding setup",
        "Working capital optimization",
        "Vendor contract standardization",
        "DRHP preparation and investor readiness",
      ],
      outcomes:
        "IPO-ready business with strong compliance, investor confidence, and operational clarity.",
    },
  },

  {
    id: 13,
    slug: "erp-implementation",
    category: "Technology",
    tag: "ERP Solutions",
    title: "ERP Implementation",
    shortDesc:
      "Integrated ERP systems for finance, operations, and HR to support scalable growth.",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "ERP implementation system",
    roundedCorners: "tl-br",
    gridClassFull: "col-span-12 md:col-span-5",
    fullContent: {
      heroSubtitle:
        "Integrated technology infrastructure for scalable growth",
      description:
        "Implement ERP systems that unify finance, operations, and HR.",
      keyBenefits: [
        "Chart of Accounts configuration",
        "Budgeting and forecasting automation",
        "Costing and profitability analysis",
        "Cash flow and working capital management",
        "Vendor and expense management",
        "Operations and procurement control",
        "Sales and project management integration",
        "HR payroll and attendance integration",
      ],
      outcomes:
        "Transparent, compliant operations with real-time tracking and stronger profitability control.",
    },
  },

  {
    id: 14,
    slug: "mis-reporting",
    category: "Technology",
    tag: "Business Intelligence",
    title: "MIS Reporting",
    shortDesc:
      "Unified real-time reporting across sales, operations, finance, and HR.",
    image:
      "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "MIS reporting dashboard",
    roundedCorners: "tr-bl",
    gridClassFull: "col-span-12 md:col-span-4",
    fullContent: {
      heroSubtitle: "Unified reporting for smarter business decisions",
      description:
        "Gain real-time visibility across every business function.",
      keyBenefits: [
        "Sales MIS reporting",
        "Operations MIS reporting",
        "Finance MIS reporting",
        "HR MIS reporting",
        "Profitability and pricing analysis",
        "Inventory and production tracking",
        "Working capital monitoring",
        "Performance dashboards and analytics",
      ],
      outcomes:
        "Unified real-time visibility across departments for data-driven leadership and operational control.",
    },
  },

  {
    id: 15,
    slug: "inter-departmental-automated-office-transformation",
    category: "Operations",
    tag: "Office Transformation",
    title: "Inter-Departmental and Automated Office Transformation",
    shortDesc:
      "Transform manual workflows into intelligent, automated operations across departments.",
    image:
      "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Office automation transformation",
    roundedCorners: "tl-br",
    gridClassFull: "col-span-12 md:col-span-5 md:row-span-2",
    fullContent: {
      heroSubtitle:
        "From manual workflows to intelligent automated operations",
      description:
        "Automate office workflows and improve operational efficiency across teams.",
      keyBenefits: [
        "Process identification and prioritization",
        "Current-state workflow mapping",
        "Baseline KPI and performance metrics",
        "Workflow automation and redesign",
        "Financial process integration",
        "Vendor and procurement automation",
        "Change implementation and monitoring",
        "Cross-department accountability systems",
      ],
      outcomes:
        "Reduced manual workload, faster approvals, improved working capital efficiency, and full audit visibility.",
    },
  },

  {
    id: 16,
    slug: "ecommerce-brand-positioning-visibility-optimization",
    category: "Technology",
    tag: "Brand Visibility",
    title: "E-Commerce Brand Positioning & Visibility Optimization",
    shortDesc:
      "Strengthen online visibility, customer engagement, and e-commerce growth.",
    image:
      "https://images.pexels.com/photos/6956803/pexels-photo-6956803.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "E-commerce brand optimization",
    roundedCorners: "tr-bl",
    gridClassFull: "col-span-12 md:col-span-3",
    fullContent: {
      heroSubtitle:
        "Strong online visibility and brand positioning for sustainable growth",
      description:
        "Optimize digital presence and e-commerce visibility to increase growth and engagement.",
      keyBenefits: [
        "Digital presence assessment",
        "Product and service listing optimization",
        "Online visibility strategy",
        "Catalogue and menu structuring",
        "Promotional strategy advisory",
        "Platform positioning recommendations",
        "Customer engagement optimization",
        "Business goal alignment for growth",
      ],
      outcomes:
        "Higher brand visibility, stronger customer engagement, increased sales, and sustainable margin growth.",
    },
  },
];

export function getServiceBySlug(slug: string) {
  return ALL_SERVICES.find(service => service.slug === slug);
}