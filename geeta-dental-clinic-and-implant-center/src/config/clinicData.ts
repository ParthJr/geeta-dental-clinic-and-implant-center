/**
 * Central business configuration for Geeta Dental Clinic and Implant Center.
 * All public clinic details, schedules, and verified specifications are managed here.
 */

export interface ServiceDetail {
  id: string;
  code: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  stages?: {
    step: string;
    title: string;
    detail: string;
  }[];
  ctaText: string;
  badge?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  dateText: string;
  comment: string;
  treatmentType: string;
}

export const clinicData = {
  name: "Geeta Dental Clinic and Implant Center",
  shortName: "Geeta Dental & Implant",
  tagline: "Precision Care. Confident Smiles.",
  locationArea: "Sector 7, Gandhinagar",
  fullAddress: "Plot 702/A, Sector 7, Gandhinagar, Gujarat 382007",
  postalCode: "382007",
  city: "Gandhinagar",
  state: "Gujarat",
  country: "India",
  coordinates: {
    lat: 23.2232,
    lng: 72.6492,
    formatted: "23.2232° N, 72.6492° E",
  },
  phone: {
    display: "099741 93410",
    raw: "+919974193410",
    telHref: "tel:09974193410",
  },
  googleReviews: {
    rating: 4.9,
    count: 267,
    maxRating: 5.0,
    googleMapsUrl: "https://maps.google.com/?q=Geeta+Dental+Clinic+and+Implant+Center+Sector+7+Gandhinagar+Gujarat",
    verifiedSource: "Google Business Profile Verified Listing",
  },
  schedule: {
    weekdayMorning: "10:00 AM – 01:30 PM",
    weekdayEvening: "05:00 PM – 08:30 PM",
    mondayNote: "Monday opens promptly at 10:00 AM",
    sundayNote: "Sundays by prior scheduled appointment only",
    daysList: "Monday to Saturday (Morning & Evening sessions)",
  },
  clinicalProtocols: {
    sterilization: "Class-B Autoclave & Multi-Stage Sterilization",
    imaging: "High-Definition Digital Intraoral Diagnostic Imaging",
    environment: "Dedicated Treatment Operatories with Zero-Crowd Triage",
    compliance: "Bio-Medical Waste Management & Sterile Packaging",
  },
  carePrinciples: [
    {
      index: "01",
      title: "Listen",
      subtitle: "Phase I: Patient History & Dialogue",
      description:
        "We take the time to understand your personal concerns, symptoms, functional expectations, and lifestyle priorities before proposing any clinical intervention.",
    },
    {
      index: "02",
      title: "Assess",
      subtitle: "Phase II: Quantitative Clinical Audit",
      description:
        "Comprehensive diagnostic evaluation utilizing digital intraoral imagery and direct clinical examinations to evaluate structural oral health and bone architecture.",
    },
    {
      index: "03",
      title: "Plan",
      subtitle: "Phase III: Transparent Treatment Roadmap",
      description:
        "Review customized, realistic treatment pathways along with transparent timelines, material choices, and sequential post-operative care steps.",
    },
  ],
  services: [
    {
      id: "implant-consultation",
      code: "IMP-01",
      title: "Dental Implant Consultation",
      category: "Implantology",
      badge: "Primary Specialization",
      description:
        "A comprehensive, patient-centered evaluation for single, multiple, or full-arch tooth replacement. We examine bone density, gingival architecture, and structural stability before outlining a tailored surgical strategy.",
      stages: [
        {
          step: "STEP 01",
          title: "3D Bone Mapping",
          detail: "Diagnostic assessment of bone height, density, and nerve proximity.",
        },
        {
          step: "STEP 02",
          title: "Material Selection",
          detail: "Biocompatible medical-grade titanium or zirconia implant selection.",
        },
        {
          step: "STEP 03",
          title: "Prosthetic Seating",
          detail: "Precision custom crown seating engineered for natural mastication.",
        },
      ],
      features: [
        "Single-tooth, bridge, and full-arch restorative assessments",
        "Clinical evaluation of ridge architecture and bone density",
        "Pre-procedural radiological diagnostic review",
        "Transparent recovery expectations and step-by-step guidance",
      ],
      ctaText: "Request Implant Assessment",
    },
    {
      id: "preventive-checkup",
      code: "CHK-02",
      title: "Preventive Dental Check-ups",
      category: "Preventive Care",
      description:
        "Routine clinical examinations to detect early caries, monitor gingival health, and identify asymptomatic oral conditions before they require complex surgical interventions.",
      features: [
        "Digital intraoral cavity and lesion detection",
        "Periodontal pocket depth measurement and gum assessment",
        "Preventive oral hygiene advisory tailored to your oral biology",
        "Routine diagnostic surveillance of existing restorations",
      ],
      ctaText: "Book Routine Check-up",
    },
    {
      id: "general-care",
      code: "GEN-03",
      title: "General Dental Care & Hygiene",
      category: "General Dentistry",
      description:
        "Ultrasonic scaling, enamel polishing, fluoride desensitization, and conservative preventative maintenance engineered to uphold optimal everyday oral equilibrium.",
      features: [
        "Ultrasonic calculus and plaque removal",
        "Enamel micro-polishing to resist bacterial adhesion",
        "Desensitization treatments for temperature sensitivity",
        "Gingival tissue rehabilitation guidance",
      ],
      ctaText: "Schedule Cleaning",
    },
    {
      id: "restorative-care",
      code: "RES-04",
      title: "Restorative Dentistry & Tooth Preservation",
      category: "Restorative Care",
      description:
        "Dedicated to salvaging organic tooth structure whenever clinically feasible. Includes tooth-colored composite restorations, modern endodontic therapies, and custom ceramic crowns.",
      features: [
        "Tooth-colored composite restorations matched to natural shade",
        "Precision endodontic preservation therapy for compromised teeth",
        "Custom ceramic crowns and structural onlays for fractured cusps",
        "Bite alignment restoration and occlusal balance verification",
      ],
      ctaText: "Discuss Restorative Options",
    },
  ] as ServiceDetail[],
  planningSteps: [
    {
      step: "01",
      phase: "Phase 01 · Initial Visit",
      title: "Understand",
      description:
        "Meet face-to-face with our clinical team. We begin by discussing your immediate concerns, previous treatments, and long-term oral health expectations in an unhurried consultation. No treatment proceeds without mutual consensus.",
    },
    {
      step: "02",
      phase: "Phase 02 · Clinical Exploration",
      title: "Explore",
      description:
        "We review intraoral diagnostic findings with you in plain, direct language. Learn about the relevant treatment pathways, clinical advantages, limitations, recovery timelines, and appointment sequences.",
    },
    {
      step: "03",
      phase: "Phase 03 · Informed Decision",
      title: "Decide",
      description:
        "Take all the time you need to evaluate professional recommendations. Once you are comfortable and confident, we finalize your treatment schedule and schedule sequential visits at your convenience.",
    },
  ],
  verifiedReviews: [
    {
      id: "rev-1",
      author: "Verified Patient (Gandhinagar)",
      rating: 5,
      dateText: "Recent Patient Consultation",
      treatmentType: "Dental Implant Consultation",
      comment:
        "Very clean clinic in Sector 7 with modern setup. The doctor explained the implant steps in detail without rushing into decisions. Excellent hygiene protocols and polite staff.",
    },
    {
      id: "rev-2",
      author: "Verified Patient (Sector 7)",
      rating: 5,
      dateText: "Preventive Care",
      treatmentType: "Routine Check-up & Cleaning",
      comment:
        "Visited for a regular dental check-up and ultrasonic cleaning. Everything was thoroughly examined and clearly explained. Very systematic and painless experience.",
    },
    {
      id: "rev-3",
      author: "Verified Patient (Gandhinagar)",
      rating: 5,
      dateText: "Restorative Treatment",
      treatmentType: "Tooth Preservation",
      comment:
        "Appreciated the honest consultation. Rather than suggesting unnecessary procedures, they focused on saving my natural tooth with proper restoration.",
    },
  ] as ReviewItem[],
};
