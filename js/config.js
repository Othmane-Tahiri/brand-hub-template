/* Brand Hub Studio export — preserves original template content.
   Subsection visibility requires the upcoming Step 03 website update. */
const BRAND_CONFIG = {
  "brand": {
    "name": "VIANDARI",
    "tagline": "BOUCHERIE",
    "description": "Explore our visual identity system."
  },
  "theme": "swiss",
  "publishingMode": "showcase",
  "colors": {
    "primary": "#740606",
    "secondary": "#F0EDE6",
    "accent": "#B68B59",
    "background": "#FFFFFF",
    "text": "#202020"
  },
  "brandPalette": [
    {
      "name": "Charcoal",
      "role": "Primary",
      "hex": "#202020"
    },
    {
      "name": "Warm Ivory",
      "role": "Secondary",
      "hex": "#F0EDE6"
    },
    {
      "name": "Muted Gold",
      "role": "Accent",
      "hex": "#B68B59"
    }
  ],
  "tonalScales": [
    {
      "name": "Charcoal",
      "base": "#202020",
      "generate": true,
      "steps": 11,
      "shades": []
    },
    {
      "name": "Warm Ivory",
      "base": "#F0EDE6",
      "generate": true,
      "steps": 11,
      "shades": []
    },
    {
      "name": "Muted Gold",
      "base": "#B68B59",
      "generate": true,
      "steps": 11,
      "shades": []
    }
  ],
  "logoColorCombinations": [
    {
      "label": "Dark / White",
      "background": "#202020",
      "logoColor": "#FFFFFF"
    },
    {
      "label": "Dark / Accent",
      "background": "#202020",
      "logoColor": "#B68B59"
    },
    {
      "label": "Light / Dark",
      "background": "#F0EDE6",
      "logoColor": "#202020"
    },
    {
      "label": "White / Accent",
      "background": "#FFFFFF",
      "logoColor": "#B68B59"
    },
    {
      "label": "Accent / White",
      "background": "#B68B59",
      "logoColor": "#FFFFFF"
    },
    {
      "label": "White / Dark",
      "background": "#FFFFFF",
      "logoColor": "#202020"
    }
  ],
  "typography": {
    "intro": {
      "eyebrow": "THE TYPOGRAPHIC LANGUAGE",
      "headline": "A language of form.",
      "description": "Where expression meets precision. A considered balance of character, rhythm, and function."
    },
    "fonts": [
      {
        "name": "Cormorant Garamond",
        "role": "Primary",
        "category": "Serif",
        "family": "\"Cormorant Garamond\", Georgia, serif",
        "source": "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",
        "specimen": "Ag",
        "description": "Elegant / Expressive / Editorial",
        "weights": [
          {
            "name": "Regular",
            "value": 400,
            "style": "normal"
          },
          {
            "name": "Medium",
            "value": 500,
            "style": "normal"
          },
          {
            "name": "Semibold",
            "value": 600,
            "style": "normal"
          },
          {
            "name": "Bold",
            "value": 700,
            "style": "normal"
          },
          {
            "name": "Italic",
            "value": 400,
            "style": "italic"
          }
        ]
      },
      {
        "name": "Inter",
        "role": "Secondary",
        "category": "Sans Serif",
        "family": "\"Inter\", Arial, sans-serif",
        "source": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        "specimen": "Aa",
        "description": "Modern / Functional / Precise",
        "weights": [
          {
            "name": "Regular",
            "value": 400,
            "style": "normal"
          },
          {
            "name": "Medium",
            "value": 500,
            "style": "normal"
          },
          {
            "name": "Semibold",
            "value": 600,
            "style": "normal"
          },
          {
            "name": "Bold",
            "value": 700,
            "style": "normal"
          }
        ]
      }
    ],
    "characterSet": {
      "uppercase": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "lowercase": "abcdefghijklmnopqrstuvwxyz",
      "numbers": "0123456789",
      "punctuation": "&@!?%*"
    },
    "context": {
      "eyebrow": "A NEW PERSPECTIVE",
      "headline": "Made to\nbe remembered.",
      "italicLine": 2,
      "description": "Thoughtful typography creates a lasting impression."
    }
  },
  "graphicElements": {
    "intro": {
      "eyebrow": "THE GRAPHIC LANGUAGE",
      "headline": "Identity beyond the mark.",
      "description": "A collection of visual elements that bring character, consistency, and expression to the brand."
    },
    "featured": {
      "enabled": true,
      "title": "Signature Graphic",
      "category": "Visual Identity / Test Artwork",
      "description": "A temporary composition used to test the large editorial artwork presentation.",
      "image": "https://placehold.co/1600x900/202020/B68B59.png?text=SIGNATURE+GRAPHIC",
      "background": "#202020",
      "fit": "contain",
      "label": "TEST ARTWORK",
      "labelTheme": "light"
    },
    "assets": [
      {
        "title": "Primary Pattern",
        "category": "Pattern / Test",
        "description": "A full-width placeholder to test the presentation of a primary brand pattern.",
        "image": "https://placehold.co/1600x900/F0EDE6/202020.png?text=PRIMARY+PATTERN",
        "background": "#F0EDE6",
        "fit": "cover",
        "layout": "full",
        "label": "GRAPHIC 01",
        "labelTheme": "light"
      },
      {
        "title": "Secondary Motif",
        "category": "Graphic Motif / Test",
        "description": "A supporting graphic displayed in a half-width composition.",
        "image": "https://placehold.co/900x1100/202020/B68B59.png?text=SECONDARY+MOTIF",
        "background": "#202020",
        "fit": "contain",
        "layout": "half",
        "label": "GRAPHIC 02",
        "labelTheme": "light"
      },
      {
        "title": "Geometric Element",
        "category": "Shape / Test",
        "description": "An additional visual element to test how the gallery adapts to an uneven number of assets.",
        "image": "https://placehold.co/900x1100/B68B59/202020.png?text=GEOMETRIC+ELEMENT",
        "background": "#B68B59",
        "fit": "contain",
        "layout": "half",
        "label": "GRAPHIC 03",
        "labelTheme": "dark"
      }
    ],
    "details": [
      {
        "title": "Graphic Detail",
        "category": "Close-up / Test",
        "description": "A placeholder for a close-up view of an approved brand graphic.",
        "image": "https://placehold.co/1000x800/F0EDE6/202020.png?text=GRAPHIC+DETAIL",
        "background": "#F0EDE6",
        "fit": "cover",
        "layout": "half"
      },
      {
        "title": "Application Preview",
        "category": "Application / Test",
        "description": "A placeholder for showing how a graphic element works on a real brand application.",
        "image": "https://placehold.co/1000x800/202020/B68B59.png?text=APPLICATION+PREVIEW",
        "background": "#202020",
        "fit": "cover",
        "layout": "half"
      }
    ],
    "guidelines": [
      {
        "title": "Preserve the Original Proportions",
        "description": "Test guideline: do not stretch or distort the graphic element when placing it in a layout."
      },
      {
        "title": "Use Approved Color Combinations",
        "description": "Test guideline: apply graphic elements using the colors defined in the brand identity system."
      }
    ]
  },
  "photography": {
    "intro": {
      "eyebrow": "THE PHOTOGRAPHIC LANGUAGE",
      "headline": "A world through our lens.",
      "description": "A considered approach to imagery, balancing atmosphere, composition, lighting, and storytelling."
    },
    "featured": {
      "enabled": true,
      "title": "A Sense of Place",
      "category": "Signature Photography / Test",
      "description": "A defining visual atmosphere built through natural light, considered composition, and a quiet sense of storytelling.",
      "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1800&auto=format&fit=crop&q=85",
      "alt": "Atmospheric forest landscape with soft natural light",
      "fit": "cover"
    },
    "categories": [
      {
        "title": "Product Photography",
        "description": "Objects photographed with clarity, material sensitivity, and careful control of light.",
        "images": [
          {
            "title": "Object Study",
            "description": "A clean, minimal approach that allows the subject to remain the focus.",
            "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000&auto=format&fit=crop&q=85",
            "alt": "Red sneaker photographed against a red background",
            "fit": "cover"
          },
          {
            "title": "Product Detail",
            "description": "Close framing highlights the design, surface, and character of the object.",
            "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&auto=format&fit=crop&q=85",
            "alt": "Minimal wristwatch photographed on a light background",
            "fit": "cover"
          }
        ]
      },
      {
        "title": "Environment Photography",
        "description": "Spaces and environments captured with a strong sense of composition, atmosphere, and scale.",
        "images": [
          {
            "title": "Architectural Rhythm",
            "description": "Structured lines and quiet geometry establish a strong visual rhythm.",
            "image": "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1000&auto=format&fit=crop&q=85",
            "alt": "Modern white architectural building photographed from below",
            "fit": "cover"
          },
          {
            "title": "Natural Atmosphere",
            "description": "An environmental image shaped by soft light and natural texture.",
            "image": "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1000&auto=format&fit=crop&q=85",
            "alt": "Warm sunlight falling across an atmospheric landscape",
            "fit": "cover"
          }
        ]
      },
      {
        "title": "Lifestyle Photography",
        "description": "Everyday moments presented with an authentic, understated editorial quality.",
        "images": [
          {
            "title": "Human Connection",
            "description": "Natural expressions and authentic moments create a sense of personality.",
            "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&auto=format&fit=crop&q=85",
            "alt": "Group of friends together outdoors",
            "fit": "cover"
          }
        ]
      }
    ],
    "gallery": [
      {
        "title": "The Atmosphere",
        "category": "Landscape / Test",
        "description": "A full-width photograph establishes mood and gives the editorial gallery a strong visual opening.",
        "image": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1800&auto=format&fit=crop&q=85",
        "alt": "Mountain landscape reflected in a calm lake",
        "fit": "cover",
        "layout": "full"
      },
      {
        "title": "Material & Form",
        "category": "Architecture / Test",
        "description": "Architectural structure, repetition, and light create a considered composition.",
        "image": "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1000&auto=format&fit=crop&q=85",
        "alt": "Minimal modern architecture",
        "fit": "cover",
        "layout": "half"
      },
      {
        "title": "The Human Element",
        "category": "Lifestyle / Test",
        "description": "Human presence introduces warmth and emotional connection.",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&auto=format&fit=crop&q=85",
        "alt": "People sharing a moment outdoors",
        "fit": "cover",
        "layout": "half"
      },
      {
        "title": "A Study in Light",
        "category": "Atmosphere / Test",
        "description": "Soft light and natural shadows create a quiet, cinematic photographic direction.",
        "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&auto=format&fit=crop&q=85",
        "alt": "Sunlight filtering through a forest",
        "fit": "cover",
        "layout": "split"
      },
      {
        "title": "The Natural World",
        "category": "Environment / Test",
        "description": "A carefully composed natural scene provides visual balance and breathing room.",
        "image": "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1400&auto=format&fit=crop&q=85",
        "alt": "Soft sunlight over a natural landscape",
        "fit": "cover",
        "layout": "split-reverse"
      },
      {
        "title": "Quiet Geometry",
        "category": "Composition / Test",
        "description": "A wide photographic composition explores balance, negative space, and architectural form.",
        "image": "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1600&auto=format&fit=crop&q=85",
        "alt": "Minimal geometric architecture",
        "fit": "cover",
        "layout": "wide"
      }
    ],
    "artDirection": [
      {
        "title": "Lighting",
        "description": "Test direction: prioritize natural or carefully controlled directional light. Preserve depth through subtle highlights and believable shadows."
      },
      {
        "title": "Composition",
        "description": "Test direction: create deliberate compositions with clear visual hierarchy, balanced framing, and intentional negative space."
      },
      {
        "title": "Color & Tone",
        "description": "Test direction: maintain a consistent color atmosphere across photographs. Avoid uncontrolled shifts in saturation and white balance."
      },
      {
        "title": "Mood & Emotion",
        "description": "Test direction: select imagery that communicates an authentic emotional quality rather than an overly staged appearance."
      },
      {
        "title": "Background & Styling",
        "description": "Test direction: choose backgrounds and supporting objects that complement the subject without creating unnecessary visual distractions."
      },
      {
        "title": "Retouching",
        "description": "Test direction: preserve realistic texture, natural contrast, and material detail. Avoid excessive sharpening or artificial effects."
      }
    ],
    "comparisons": [
      {
        "title": "Composition",
        "approved": {
          "image": "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1000&auto=format&fit=crop&q=85",
          "alt": "Modern architecture with structured lines and clear composition",
          "title": "Intentional Framing",
          "description": "DO — Use deliberate framing, balanced geometry, and clear focal points."
        },
        "avoid": {
          "image": "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1000&auto=format&fit=crop&q=85",
          "alt": "Broad natural landscape used as a comparison placeholder",
          "title": "Unfocused Composition",
          "description": "DON'T — Avoid imagery without a clear subject or intentional visual hierarchy."
        }
      },
      {
        "title": "Lighting",
        "approved": {
          "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000&auto=format&fit=crop&q=85",
          "alt": "Forest with directional natural light",
          "title": "Natural Depth",
          "description": "DO — Preserve natural light transitions, atmospheric depth, and realistic shadows."
        },
        "avoid": {
          "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000&auto=format&fit=crop&q=85",
          "alt": "Highly saturated red product photograph used as a test comparison",
          "title": "Uncontrolled Saturation",
          "description": "DON'T — Avoid color treatments that conflict with the intended photographic atmosphere."
        }
      }
    ]
  },
  "layoutComposition": {
    "intro": {
      "eyebrow": "THE ART OF ARRANGEMENT",
      "headline": "Structure creates freedom.",
      "description": "A flexible design framework built on thoughtful proportions, confident hierarchy, and intentional whitespace."
    },
    "principles": [
      {
        "title": "Clarity First",
        "description": "Establish a clear focal point in every composition. Give the most important message the strongest visual priority."
      },
      {
        "title": "Intentional Whitespace",
        "description": "Allow generous breathing room around important elements. Space is an active part of the identity."
      },
      {
        "title": "Consistent Alignment",
        "description": "Align typography, imagery, and graphic elements to a shared underlying structure."
      },
      {
        "title": "Flexible Expression",
        "description": "Adapt the system to different formats while preserving its core proportions, rhythm, and visual character."
      }
    ],
    "grids": [
      {
        "title": "Editorial Grid",
        "category": "4 COLUMNS / PRINT",
        "description": "A balanced four-column structure for editorial pages, brand presentations, and print layouts.",
        "columns": 4,
        "gutter": "12px",
        "margin": "9%"
      },
      {
        "title": "Digital Grid",
        "category": "12 COLUMNS / DIGITAL",
        "description": "A flexible twelve-column grid for web interfaces, responsive layouts, and digital brand applications.",
        "columns": 12,
        "gutter": "8px",
        "margin": "7%"
      }
    ],
    "spacing": [
      {
        "title": "Clear Visual Priority",
        "description": "Use contrasting scales to distinguish headlines, supporting information, and fine details.",
        "bars": [
          85,
          50,
          25
        ]
      },
      {
        "title": "Rhythmic Spacing",
        "description": "Repeat a deliberate spacing rhythm to create order between related and unrelated elements.",
        "bars": [
          30,
          60,
          90
        ]
      },
      {
        "title": "Generous Margins",
        "description": "Maintain consistent outer margins to protect content and create a calm visual frame.",
        "bars": [
          25,
          70,
          25
        ]
      },
      {
        "title": "Balanced Density",
        "description": "Avoid crowding content. Balance areas of information with open, quiet space.",
        "bars": [
          70,
          40,
          20
        ]
      }
    ],
    "examples": [
      {
        "title": "Editorial Opening",
        "category": "FULL-WIDTH COMPOSITION / TEST",
        "description": "A strong visual opening built around one dominant image and generous whitespace.",
        "image": "https://placehold.co/1600x900/F0EDE6/202020.png?text=EDITORIAL+OPENING",
        "alt": "Placeholder for a full-width editorial layout",
        "fit": "cover",
        "layout": "full"
      },
      {
        "title": "Structured Balance",
        "category": "HALF-WIDTH COMPOSITION / TEST",
        "description": "An example of balanced visual weight within a two-column arrangement.",
        "image": "https://placehold.co/900x1000/202020/F0EDE6.png?text=BALANCED+LAYOUT",
        "alt": "Placeholder for a balanced layout",
        "fit": "cover",
        "layout": "half"
      },
      {
        "title": "Typographic Hierarchy",
        "category": "HALF-WIDTH COMPOSITION / TEST",
        "description": "An example demonstrating the relationship between headline, supporting copy, and space.",
        "image": "https://placehold.co/900x1000/B68B59/202020.png?text=TYPE+HIERARCHY",
        "alt": "Placeholder for a typographic hierarchy layout",
        "fit": "cover",
        "layout": "half"
      },
      {
        "title": "Image Meets Content",
        "category": "SPLIT COMPOSITION / TEST",
        "description": "A split layout pairs a dominant visual with a restrained supporting narrative.",
        "image": "https://placehold.co/1200x900/F0EDE6/202020.png?text=IMAGE+AND+CONTENT",
        "alt": "Placeholder for a split editorial composition",
        "fit": "cover",
        "layout": "split"
      },
      {
        "title": "Reversed Rhythm",
        "category": "REVERSED SPLIT / TEST",
        "description": "Alternating the position of imagery and text introduces rhythm without abandoning the grid.",
        "image": "https://placehold.co/1200x900/202020/B68B59.png?text=REVERSED+LAYOUT",
        "alt": "Placeholder for a reversed split composition",
        "fit": "cover",
        "layout": "split-reverse"
      }
    ],
    "comparisons": [
      {
        "title": "Alignment",
        "approved": {
          "image": "https://placehold.co/1000x750/F0EDE6/202020.png?text=DO+ALIGNED+LAYOUT",
          "alt": "Placeholder for an approved aligned composition",
          "title": "Follow the Grid",
          "description": "DO — Align elements to consistent margins and shared grid lines."
        },
        "avoid": {
          "image": "https://placehold.co/1000x750/E7DDDA/202020.png?text=DONT+MISALIGNED",
          "alt": "Placeholder for an incorrectly aligned composition",
          "title": "Avoid Arbitrary Placement",
          "description": "DON'T — Position elements without a consistent alignment system."
        }
      },
      {
        "title": "Hierarchy",
        "approved": {
          "image": "https://placehold.co/1000x750/F0EDE6/202020.png?text=DO+CLEAR+HIERARCHY",
          "alt": "Placeholder for an approved hierarchy example",
          "title": "Establish a Focal Point",
          "description": "DO — Give primary messages clear visual priority and sufficient space."
        },
        "avoid": {
          "image": "https://placehold.co/1000x750/E7DDDA/202020.png?text=DONT+CROWDED+LAYOUT",
          "alt": "Placeholder for a crowded composition",
          "title": "Avoid Visual Competition",
          "description": "DON'T — Give every element equal emphasis or crowd the composition."
        }
      }
    ]
  },
  "brandVoice": {
    "intro": {
      "eyebrow": "THE VERBAL IDENTITY",
      "headline": "Words with intention.",
      "description": "A distinctive way of speaking, built around personality, clarity, and a consistent point of view."
    },
    "personality": [
      {
        "title": "Confident",
        "description": "Speak with conviction and expertise, without sounding arrogant or overstated."
      },
      {
        "title": "Thoughtful",
        "description": "Choose language deliberately. Every word should communicate something meaningful."
      },
      {
        "title": "Approachable",
        "description": "Keep communication warm, natural, and easy to understand."
      },
      {
        "title": "Distinctive",
        "description": "Use a recognizable point of view instead of generic industry phrases."
      }
    ],
    "tone": [
      {
        "category": "EVERYDAY COMMUNICATION",
        "title": "Clear & Human",
        "description": "Be direct, friendly, and helpful when speaking to customers.",
        "example": "Made for the moments that matter."
      },
      {
        "category": "CAMPAIGNS & HEADLINES",
        "title": "Bold & Focused",
        "description": "Use short, memorable statements with one strong idea.",
        "example": "Less noise. More meaning."
      },
      {
        "category": "SERVICE & SUPPORT",
        "title": "Calm & Reassuring",
        "description": "Explain next steps clearly, acknowledge concerns, and avoid unnecessary jargon.",
        "example": "We're here to help you find the right solution."
      }
    ],
    "pillars": [
      {
        "title": "Purposeful Design",
        "description": "Every decision is made with intention, balancing beauty with usefulness.",
        "statement": "Designed with purpose."
      },
      {
        "title": "Lasting Quality",
        "description": "We value thoughtful work, considered details, and enduring results.",
        "statement": "Made to last."
      },
      {
        "title": "Human Connection",
        "description": "We build relationships through honesty, empathy, and shared understanding.",
        "statement": "Always people first."
      }
    ],
    "examples": [
      {
        "category": "BRAND HEADLINE / TEST",
        "title": "Hero Statement",
        "copy": "Made to be remembered.",
        "description": "A concise, memorable statement that expresses the brand's character.",
        "layout": "full"
      },
      {
        "category": "SOCIAL MEDIA / TEST",
        "title": "Social Caption",
        "copy": "Good things begin with thoughtful choices.",
        "description": "A warm, direct caption that communicates an idea without overexplaining.",
        "layout": "half"
      },
      {
        "category": "PRODUCT DESCRIPTION / TEST",
        "title": "Product Copy",
        "copy": "Every detail has a purpose. Every finish tells a story.",
        "description": "A considered description that highlights value and craft.",
        "layout": "half"
      },
      {
        "category": "WEBSITE / TEST",
        "title": "About Statement",
        "copy": "We believe the strongest ideas are the simplest ones, expressed with care and confidence.",
        "description": "An accessible introduction to the brand's point of view.",
        "layout": "wide"
      }
    ],
    "comparisons": [
      {
        "title": "Clarity",
        "approved": {
          "title": "Keep It Simple",
          "copy": "A better experience, from start to finish.",
          "description": "DO — Use straightforward language with a clear benefit."
        },
        "avoid": {
          "title": "Avoid Empty Jargon",
          "copy": "Leveraging innovative, next-generation synergies.",
          "description": "DON'T — Rely on vague corporate language."
        }
      },
      {
        "title": "Confidence",
        "approved": {
          "title": "Be Assured",
          "copy": "Carefully considered. Made for everyday life.",
          "description": "DO — Express confidence through specificity and restraint."
        },
        "avoid": {
          "title": "Avoid Exaggeration",
          "copy": "The world's most incredible product ever!",
          "description": "DON'T — Make exaggerated or unsupported claims."
        }
      },
      {
        "title": "Personality",
        "approved": {
          "title": "Sound Human",
          "copy": "Have a question? We're happy to help.",
          "description": "DO — Speak naturally and with warmth."
        },
        "avoid": {
          "title": "Avoid Robotic Language",
          "copy": "Your inquiry has been registered for processing.",
          "description": "DON'T — Sound distant or unnecessarily formal."
        }
      }
    ]
  },
  "brandApplications": {
    "intro": {
      "eyebrow": "THE IDENTITY IN ACTION",
      "headline": "Designed for the real world.",
      "description": "A flexible visual language, expressed consistently across every brand experience."
    },
    "featured": {
      "enabled": true,
      "title": "The Identity in Context",
      "category": "SIGNATURE APPLICATION / TEST",
      "description": "A hero presentation showing how the brand identity comes to life in a real-world setting.",
      "image": "https://placehold.co/1600x1000/F0EDE6/202020.png?text=FEATURED+BRAND+APPLICATION",
      "alt": "Placeholder for a signature brand application mockup",
      "fit": "cover"
    },
    "categories": [
      {
        "title": "Print & Stationery",
        "category": "01 / PRINT",
        "description": "Business cards, letterheads, envelopes, and everyday printed materials.",
        "image": "https://placehold.co/1000x750/F0EDE6/202020.png?text=PRINT+AND+STATIONERY",
        "alt": "Placeholder for stationery mockups",
        "fit": "cover"
      },
      {
        "title": "Digital Experiences",
        "category": "02 / DIGITAL",
        "description": "Websites, social media, presentations, and digital touchpoints.",
        "image": "https://placehold.co/1000x750/202020/F0EDE6.png?text=DIGITAL+EXPERIENCES",
        "alt": "Placeholder for digital brand applications",
        "fit": "cover"
      },
      {
        "title": "Environmental Branding",
        "category": "03 / ENVIRONMENT",
        "description": "Storefronts, signs, interiors, and branded physical spaces.",
        "image": "https://placehold.co/1000x750/B68B59/202020.png?text=ENVIRONMENTAL+BRANDING",
        "alt": "Placeholder for environmental signage",
        "fit": "cover"
      },
      {
        "title": "Merchandise & Apparel",
        "category": "04 / MERCHANDISE",
        "description": "Wearables, promotional objects, and branded merchandise.",
        "image": "https://placehold.co/1000x750/E8E5DE/202020.png?text=MERCHANDISE+AND+APPAREL",
        "alt": "Placeholder for branded merchandise",
        "fit": "cover"
      }
    ],
    "gallery": [
      {
        "title": "Stationery Collection",
        "category": "PRINT APPLICATION / TEST",
        "description": "A cohesive stationery family using the approved visual identity.",
        "image": "https://placehold.co/1600x900/F0EDE6/202020.png?text=STATIONERY+COLLECTION",
        "alt": "Placeholder for a stationery collection",
        "fit": "cover",
        "layout": "full"
      },
      {
        "title": "Digital Touchpoint",
        "category": "DIGITAL APPLICATION / TEST",
        "description": "A focused digital experience with consistent typography and color.",
        "image": "https://placehold.co/900x1100/202020/F0EDE6.png?text=DIGITAL+TOUCHPOINT",
        "alt": "Placeholder for a digital application",
        "fit": "cover",
        "layout": "half"
      },
      {
        "title": "Brand Merchandise",
        "category": "MERCHANDISE / TEST",
        "description": "A tangible expression of the identity on everyday objects.",
        "image": "https://placehold.co/900x1100/B68B59/202020.png?text=BRAND+MERCHANDISE",
        "alt": "Placeholder for brand merchandise",
        "fit": "cover",
        "layout": "half"
      },
      {
        "title": "Environmental Presence",
        "category": "SIGNAGE / TEST",
        "description": "The brand applied to a physical space with clear visual hierarchy.",
        "image": "https://placehold.co/1200x900/E8E5DE/202020.png?text=ENVIRONMENTAL+PRESENCE",
        "alt": "Placeholder for environmental branding",
        "fit": "cover",
        "layout": "split"
      },
      {
        "title": "A Consistent Experience",
        "category": "BRAND TOUCHPOINT / TEST",
        "description": "A second application demonstrating a flexible but unified identity.",
        "image": "https://placehold.co/1200x900/202020/B68B59.png?text=CONSISTENT+EXPERIENCE",
        "alt": "Placeholder for an additional brand touchpoint",
        "fit": "cover",
        "layout": "split-reverse"
      }
    ],
    "details": [
      {
        "title": "Paper & Print Finish",
        "category": "MATERIAL DETAIL / TEST",
        "description": "A close-up showing the tactile qualities of a printed brand application.",
        "image": "https://placehold.co/1000x800/F0EDE6/202020.png?text=PAPER+AND+PRINT+DETAIL",
        "alt": "Placeholder for a paper and print detail",
        "fit": "cover",
        "layout": "half"
      },
      {
        "title": "Production Detail",
        "category": "FINISHING / TEST",
        "description": "An example of how production decisions support the brand's character.",
        "image": "https://placehold.co/1000x800/202020/B68B59.png?text=PRODUCTION+DETAIL",
        "alt": "Placeholder for a production finish detail",
        "fit": "cover",
        "layout": "half"
      }
    ],
    "guidelines": [
      {
        "title": "Protect Brand Consistency",
        "description": "Use only approved logo variations, brand colors, and typefaces across every application."
      },
      {
        "title": "Respect the Format",
        "description": "Adapt scale, spacing, and composition to each medium without distorting brand elements."
      },
      {
        "title": "Prioritize Production Quality",
        "description": "Choose materials, print techniques, and finishes that support the intended brand experience."
      },
      {
        "title": "Keep the Message Clear",
        "description": "Maintain legible typography, meaningful hierarchy, and sufficient whitespace in every touchpoint."
      }
    ]
  },
  "packagingDesign": {
    "intro": {
      "eyebrow": "THE TANGIBLE IDENTITY",
      "headline": "Made to be held.",
      "description": "A considered packaging system that brings the identity into the physical world through form, material, and detail."
    },
    "featured": {
      "enabled": true,
      "title": "The Signature Package",
      "category": "FEATURED PACKAGING / TEST",
      "description": "A hero mockup that introduces the packaging language through its silhouette, proportions, and signature brand details.",
      "image": "https://placehold.co/1600x1000/F0EDE6/202020.png?text=FEATURED+PACKAGING",
      "alt": "Placeholder for the signature packaging mockup",
      "fit": "cover"
    },
    "collection": [
      {
        "title": "Signature Box",
        "category": "BOX / TEST",
        "description": "A premium rigid-box concept with a restrained logo treatment and thoughtful opening experience.",
        "image": "https://placehold.co/1600x900/F0EDE6/202020.png?text=SIGNATURE+BOX",
        "alt": "Placeholder for a branded signature box",
        "fit": "cover",
        "layout": "full"
      },
      {
        "title": "Shopping Bag",
        "category": "RETAIL PACKAGING / TEST",
        "description": "A branded carry bag using the identity's core typography and palette.",
        "image": "https://placehold.co/900x1100/202020/F0EDE6.png?text=SHOPPING+BAG",
        "alt": "Placeholder for a branded shopping bag",
        "fit": "cover",
        "layout": "half"
      },
      {
        "title": "Product Label",
        "category": "LABEL SYSTEM / TEST",
        "description": "A modular label that balances product information with a distinctive brand presence.",
        "image": "https://placehold.co/900x1100/B68B59/202020.png?text=PRODUCT+LABEL",
        "alt": "Placeholder for a branded product label",
        "fit": "cover",
        "layout": "half"
      },
      {
        "title": "Unboxing Experience",
        "category": "CUSTOMER EXPERIENCE / TEST",
        "description": "A considered arrangement of packaging components and presentation details.",
        "image": "https://placehold.co/1200x900/E8E5DE/202020.png?text=UNBOXING+EXPERIENCE",
        "alt": "Placeholder for an unboxing presentation",
        "fit": "cover",
        "layout": "split"
      }
    ],
    "materials": [
      {
        "title": "Uncoated Paper",
        "category": "MATERIAL / TEST",
        "description": "A tactile, understated paper stock with a soft natural finish.",
        "image": "https://placehold.co/1000x800/F0EDE6/202020.png?text=UNCOATED+PAPER",
        "alt": "Placeholder for uncoated paper texture",
        "fit": "cover"
      },
      {
        "title": "Embossed Detail",
        "category": "FINISH / TEST",
        "description": "Subtle raised detailing introduces depth without excessive decoration.",
        "image": "https://placehold.co/1000x800/202020/B68B59.png?text=EMBOSSED+DETAIL",
        "alt": "Placeholder for an embossed print detail",
        "fit": "cover"
      },
      {
        "title": "Printed Surface",
        "category": "PRINT METHOD / TEST",
        "description": "Controlled color and crisp printing support consistency across packaging formats.",
        "image": "https://placehold.co/1000x800/B68B59/202020.png?text=PRINTED+SURFACE",
        "alt": "Placeholder for a printed packaging surface",
        "fit": "cover"
      }
    ],
    "specifications": [
      {
        "title": "Primary Box Format",
        "category": "DIMENSIONS / TEST",
        "value": "To be confirmed",
        "description": "Record the approved dimensions, tolerances, and dieline reference for the primary package."
      },
      {
        "title": "Material Stock",
        "category": "SUBSTRATE / TEST",
        "value": "To be confirmed",
        "description": "Specify the approved stock, weight, finish, and sustainability requirements."
      },
      {
        "title": "Print & Finishing",
        "category": "PRODUCTION / TEST",
        "value": "To be confirmed",
        "description": "Document the approved printing process, inks, coatings, and special finishes."
      },
      {
        "title": "Artwork Preparation",
        "category": "PREPRESS / TEST",
        "value": "To be confirmed",
        "description": "Confirm bleed, safe areas, color profile, and supplier-ready export requirements."
      }
    ],
    "comparisons": [
      {
        "title": "Logo Placement",
        "approved": {
          "image": "https://placehold.co/1000x750/F0EDE6/202020.png?text=DO+CORRECT+PLACEMENT",
          "alt": "Placeholder for approved logo placement",
          "title": "Protect the Identity",
          "description": "DO — Respect clear space, alignment, and approved logo proportions."
        },
        "avoid": {
          "image": "https://placehold.co/1000x750/E7DDDA/202020.png?text=DONT+CROWDED+LOGO",
          "alt": "Placeholder for incorrect logo placement",
          "title": "Avoid Crowding",
          "description": "DON'T — Place text or decorative elements inside the logo's protected space."
        }
      },
      {
        "title": "Production Consistency",
        "approved": {
          "image": "https://placehold.co/1000x750/F0EDE6/202020.png?text=DO+CONSISTENT+FINISH",
          "alt": "Placeholder for approved packaging finish",
          "title": "Use Approved Materials",
          "description": "DO — Match the agreed colors, material specifications, and finishes."
        },
        "avoid": {
          "image": "https://placehold.co/1000x750/E7DDDA/202020.png?text=DONT+UNAPPROVED+FINISH",
          "alt": "Placeholder for an unapproved packaging finish",
          "title": "Avoid Unapproved Substitutions",
          "description": "DON'T — Change material or print finishes without checking their effect on the identity."
        }
      }
    ]
  },
  "motionGuidelines": {
    "intro": {
      "eyebrow": "THE IDENTITY IN MOTION",
      "headline": "Movement with meaning.",
      "description": "A purposeful motion language that brings the brand to life through rhythm, clarity, and restraint."
    },
    "principles": [
      {
        "title": "Purposeful Movement",
        "description": "Every transition should guide attention or communicate a clear idea, never movement for its own sake."
      },
      {
        "title": "Recognizable Rhythm",
        "description": "Use a consistent pace and animation vocabulary across every touchpoint."
      },
      {
        "title": "Elegant Restraint",
        "description": "Favor precise, understated motion over unnecessary effects or visual noise."
      },
      {
        "title": "Accessible by Design",
        "description": "Ensure essential information remains available without animation and respect reduced-motion preferences."
      }
    ],
    "logoAnimations": [
      {
        "title": "Primary Logo Reveal",
        "category": "LOGO MOTION / TEST",
        "description": "A calm, confident introduction to the primary brand mark.",
        "mediaType": "image",
        "image": "https://placehold.co/1600x900/202020/F0EDE6.png?text=PRIMARY+LOGO+REVEAL",
        "alt": "Placeholder preview for primary logo animation",
        "duration": "2–3 seconds",
        "fit": "contain",
        "layout": "full"
      },
      {
        "title": "Secondary Logo Transition",
        "category": "LOGO MOTION / TEST",
        "description": "A compact animation suitable for shorter digital formats.",
        "mediaType": "image",
        "image": "https://placehold.co/1000x750/F0EDE6/202020.png?text=SECONDARY+LOGO+MOTION",
        "alt": "Placeholder preview for secondary logo animation",
        "duration": "1–2 seconds",
        "fit": "contain",
        "layout": "half"
      }
    ],
    "behaviors": [
      {
        "title": "Micro-interactions",
        "category": "DURATION / TEST",
        "value": "150–250 ms",
        "easing": "ease-out",
        "description": "Use brief transitions for hover, focus, and interface feedback."
      },
      {
        "title": "Content Reveals",
        "category": "DURATION / TEST",
        "value": "400–650 ms",
        "easing": "ease-in-out",
        "description": "Reveal content smoothly while keeping the reading experience uninterrupted."
      },
      {
        "title": "Scene Transitions",
        "category": "DURATION / TEST",
        "value": "600–900 ms",
        "easing": "ease-in-out",
        "description": "Use measured transitions between major visual moments."
      },
      {
        "title": "Logo Animation",
        "category": "DURATION / TEST",
        "value": "2–3 seconds",
        "easing": "custom / approved",
        "description": "Keep the logo reveal clear, deliberate, and faithful to the original mark."
      }
    ],
    "applications": [
      {
        "title": "Social Media Motion",
        "category": "DIGITAL APPLICATION / TEST",
        "description": "A consistent animation approach for short-form branded content.",
        "mediaType": "image",
        "image": "https://placehold.co/1600x900/F0EDE6/202020.png?text=SOCIAL+MOTION",
        "alt": "Placeholder for social media motion",
        "fit": "cover",
        "layout": "full"
      },
      {
        "title": "Website Transitions",
        "category": "WEB EXPERIENCE / TEST",
        "description": "Quiet interface motion that reinforces hierarchy and navigation.",
        "mediaType": "image",
        "image": "https://placehold.co/1000x900/202020/F0EDE6.png?text=WEBSITE+MOTION",
        "alt": "Placeholder for website motion",
        "fit": "cover",
        "layout": "half"
      },
      {
        "title": "Campaign Animation",
        "category": "CAMPAIGN / TEST",
        "description": "An expressive but controlled extension of the core motion language.",
        "mediaType": "image",
        "image": "https://placehold.co/1000x900/B68B59/202020.png?text=CAMPAIGN+MOTION",
        "alt": "Placeholder for campaign motion",
        "fit": "cover",
        "layout": "half"
      }
    ],
    "comparisons": [
      {
        "title": "Pacing",
        "approved": {
          "image": "https://placehold.co/1000x750/F0EDE6/202020.png?text=DO+CONTROLLED+PACING",
          "alt": "Placeholder for approved animation pacing",
          "title": "Use Considered Timing",
          "description": "DO — Allow enough time for the message and movement to register."
        },
        "avoid": {
          "image": "https://placehold.co/1000x750/E7DDDA/202020.png?text=DONT+RUSHED+MOTION",
          "alt": "Placeholder for rushed animation",
          "title": "Avoid Distracting Speed",
          "description": "DON'T — Use abrupt, excessively fast, or competing transitions."
        }
      },
      {
        "title": "Brand Integrity",
        "approved": {
          "image": "https://placehold.co/1000x750/F0EDE6/202020.png?text=DO+PRESERVE+LOGO",
          "alt": "Placeholder for correct logo animation",
          "title": "Preserve the Mark",
          "description": "DO — Animate the approved logo without changing its proportions or geometry."
        },
        "avoid": {
          "image": "https://placehold.co/1000x750/E7DDDA/202020.png?text=DONT+DISTORT+LOGO",
          "alt": "Placeholder for distorted logo animation",
          "title": "Avoid Distortion",
          "description": "DON'T — Stretch, warp, or redraw the identity during motion."
        }
      }
    ]
  },
  "resourcesDownloads": {
    "intro": {
      "eyebrow": "YOUR BRAND, READY TO USE",
      "headline": "The right assets. Every time.",
      "description": "A curated library of approved brand materials, organized to keep every application consistent and every handoff effortless."
    },
    "featured": {
      "enabled": true,
      "eyebrow": "COMPLETE BRAND PACKAGE / SAMPLE",
      "title": "Brand Identity Master Package",
      "description": "The central collection of approved brand assets, organized for easy use across print and digital applications.",
      "fileName": "brand-identity-master.zip",
      "fileType": "ZIP ARCHIVE",
      "fileSize": "Pending final export",
      "version": "Sample / Not delivered",
      "url": "",
      "buttonLabel": "Download brand package",
      "note": "A download becomes available after the final approved archive is uploaded."
    },
    "categories": [
      {
        "title": "Logo Files",
        "category": "01 / IDENTITY ASSETS",
        "description": "Approved logo variations for different backgrounds, formats, and production needs.",
        "assets": [
          {
            "title": "Primary Logo — Vector",
            "description": "Scalable artwork for professional print and design workflows.",
            "format": "SVG / EPS / AI",
            "fileName": "primary-logo-vector.zip",
            "fileSize": "Pending export",
            "url": ""
          },
          {
            "title": "Logo Variations — Digital",
            "description": "Approved light, dark, and transparent versions for screens.",
            "format": "PNG / SVG",
            "fileName": "logo-digital-variations.zip",
            "fileSize": "Pending export",
            "url": ""
          }
        ]
      },
      {
        "title": "Brand Guidelines",
        "category": "02 / DOCUMENTATION",
        "description": "Reference materials for applying the identity accurately.",
        "assets": [
          {
            "title": "Brand Guidelines PDF",
            "description": "A shareable reference for identity rules and usage standards.",
            "format": "PDF",
            "fileName": "brand-guidelines.pdf",
            "fileSize": "Pending export",
            "url": ""
          }
        ]
      },
      {
        "title": "Graphic Assets & Templates",
        "category": "03 / DESIGN RESOURCES",
        "description": "Approved supporting graphics and editable templates, where included in the project.",
        "assets": [
          {
            "title": "Brand Graphic Elements",
            "description": "Patterns, motifs, and supporting elements for consistent brand expression.",
            "format": "SVG / PNG",
            "fileName": "brand-graphics.zip",
            "fileSize": "Pending export",
            "url": ""
          },
          {
            "title": "Social Media Templates",
            "description": "Editable layouts for recurring branded communication.",
            "format": "AI / PDF",
            "fileName": "social-templates.zip",
            "fileSize": "Pending export",
            "url": ""
          }
        ]
      }
    ],
    "formats": [
      {
        "extension": "AI",
        "title": "Adobe Illustrator",
        "category": "EDITABLE SOURCE",
        "description": "Native editable vector artwork for designers using compatible software."
      },
      {
        "extension": "EPS",
        "title": "Encapsulated PostScript",
        "category": "VECTOR / PRODUCTION",
        "description": "Scalable vector format used in many professional print workflows."
      },
      {
        "extension": "SVG",
        "title": "Scalable Vector Graphic",
        "category": "DIGITAL / VECTOR",
        "description": "Resolution-independent graphics suited to web and supported design applications."
      },
      {
        "extension": "PDF",
        "title": "Portable Document Format",
        "category": "DOCUMENT / PRINT",
        "description": "Shareable guidelines or production-ready artwork when exported to the correct specification."
      },
      {
        "extension": "PNG",
        "title": "Portable Network Graphic",
        "category": "DIGITAL / RASTER",
        "description": "Raster images that can preserve transparent backgrounds."
      },
      {
        "extension": "JPG",
        "title": "JPEG Image",
        "category": "DIGITAL / RASTER",
        "description": "Compressed image format for photographs and nontransparent previews."
      }
    ],
    "instructions": [
      {
        "title": "Choose the Approved Version",
        "description": "Select the logo or asset variation intended for the background, size, and application."
      },
      {
        "title": "Use Vector Files When Possible",
        "description": "For scalable logos and professional print production, start with the approved vector artwork."
      },
      {
        "title": "Keep Master Files Intact",
        "description": "Work from copies, preserve the original source files, and avoid stretching or redrawing brand elements."
      },
      {
        "title": "Check Production Requirements",
        "description": "Confirm print dimensions, bleed, color mode, and supplier specifications before production."
      }
    ],
    "delivery": {
      "version": "To be confirmed",
      "updated": "To be confirmed",
      "preparedBy": "Brand identity design team",
      "contact": "",
      "notes": "This is a sample asset library. Replace all sample descriptions, filenames, and empty URLs with approved project deliverables before client handoff."
    }
  },
  "sections": {
    "overview": true,
    "strategy": true,
    "logo": true,
    "colors": true,
    "typography": true,
    "graphics": false,
    "photography": false,
    "layout": false,
    "voice": false,
    "applications": true,
    "packaging": false,
    "motion": true,
    "resources": false
  },
  "studioSubsections": {
    "overview": {
      "overview-0": true,
      "overview-1": false
    },
    "strategy": {
      "strategy-0": true,
      "strategy-1": false,
      "strategy-2": true,
      "strategy-3": false,
      "strategy-4": true,
      "strategy-5": false
    },
    "logo": {
      "logo-0": true,
      "logo-1": true,
      "logo-2": true,
      "logo-3": true,
      "logo-4": false,
      "logo-5": false,
      "logo-6": true,
      "logo-7": false
    },
    "colors": {
      "colors-0": true,
      "colors-1": false,
      "colors-2": true,
      "colors-3": true,
      "colors-4": true
    },
    "typography": {
      "typography-0": true,
      "typography-1": true,
      "typography-2": false,
      "typography-3": false
    },
    "graphics": {
      "graphics-0": false,
      "graphics-1": false,
      "graphics-2": false,
      "graphics-3": false
    },
    "photography": {
      "photography-0": false,
      "photography-1": false,
      "photography-2": false,
      "photography-3": false,
      "photography-4": false
    },
    "layout": {
      "layout-0": false,
      "layout-1": false,
      "layout-2": false,
      "layout-3": false,
      "layout-4": false
    },
    "voice": {
      "voice-0": false,
      "voice-1": false,
      "voice-2": false,
      "voice-3": false,
      "voice-4": false
    },
    "applications": {
      "applications-0": true,
      "applications-1": true,
      "applications-2": true,
      "applications-3": false,
      "applications-4": false
    },
    "packaging": {
      "packaging-0": false,
      "packaging-1": false,
      "packaging-2": false,
      "packaging-3": false,
      "packaging-4": false
    },
    "motion": {
      "motion-0": false,
      "motion-1": true,
      "motion-2": false,
      "motion-3": false,
      "motion-4": false
    },
    "resources": {
      "resources-0": false,
      "resources-1": false,
      "resources-2": false,
      "resources-3": false,
      "resources-4": false
    }
  }
};
