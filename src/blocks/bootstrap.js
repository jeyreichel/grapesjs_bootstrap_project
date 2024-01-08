import { source as a1 } from './data/applications-1'
import { source as a1s } from './data/icons/applications-1'
import { source as c1 } from './data/cta-1'
import { source as c1s } from './data/icons/cta-1'
import { source as c2 } from './data/cta-2'
import { source as c2s } from './data/icons/cta-2'
import { source as c3 } from './data/cta-3'
import { source as c3s } from './data/icons/cta-3'
import { source as c4 } from './data/cta-4'
import { source as c4s } from './data/icons/cta-4'
import { source as c5 } from './data/cta-5'
import { source as c5s } from './data/icons/cta-5'
import { source as f1 } from './data/faq-1'
import { source as f1s } from './data/icons/faq-1'
import { source as f2 } from './data/faq-2'
import { source as f2s } from './data/icons/faq-2'
import { source as f3 } from './data/faq-3'
import { source as f3s } from './data/icons/faq-3'
import { source as f4 } from './data/feature-1'
import { source as f4s } from './data/icons/feature-1'
import { source as f5 } from './data/feature-2'
import { source as f5s } from './data/icons/feature-2'
import { source as f6 } from './data/feature-3'
import { source as f6s } from './data/icons/feature-3'
import { source as f7 } from './data/feature-4'
import { source as f7s } from './data/icons/feature-4'
import { source as f8 } from './data/feature-5'
import { source as f8s } from './data/icons/feature-5'
import { source as f9 } from './data/feature-6'
import { source as f9s } from './data/icons/feature-6'
import { source as h1 } from './data/howitkworks-1'
import { source as h1s } from './data/icons/howitworks-1'
import { source as h2 } from './data/howitkworks-2'
import { source as h2s } from './data/icons/howitworks-2'
import { source as h3 } from './data/http_codes-1'
import { source as h3s } from './data/icons/http_codes-1'
import { source as n1 } from './data/navigation-1'
import { source as n1s } from './data/icons/navigation-1'
import { source as n2 } from './data/navigation-2'
import { source as n2s } from './data/icons/navigation-2'
import { source as p1 } from './data/portfolio-1'
import { source as p1s } from './data/icons/portfolio-1'
import { source as p2 } from './data/portfolio-2'
import { source as p2s } from './data/icons/portfolio-2'
import { source as p3 } from './data/pricing-1'
import { source as p3s } from './data/icons/pricing-1'
import { source as p4 } from './data/pricing-2'
import { source as p4s } from './data/icons/pricing-2'
import { source as p5 } from './data/pricing-3'
import { source as p5s } from './data/icons/pricing-3'
import { source as p6 } from './data/pricing-4'
import { source as p6s } from './data/icons/pricing-4'
import { source as s1 } from './data/signup-1'
import { source as s1s } from './data/icons/signup-1'
import { source as s2 } from './data/signup-2'
import { source as s2s } from './data/icons/signup-2'
import { source as s3 } from './data/signup-3'
import { source as s3s } from './data/icons/signup-3'
import { source as t1 } from './data/team-1'
import { source as t1s } from './data/icons/team-1'
import { source as t2 } from './data/testimonial-1'
import { source as t2s } from './data/icons/testimonial-1'
import { source as t3 } from './data/testimonial-2'
import { source as t3s } from './data/icons/testimonial-2'
import { source as t4 } from './data/testimonial-3'
import { source as t4s } from './data/icons/testimonial-3'
const getSvgHtml = (svg) => {
  if (typeof window === 'undefined') return ''
  svg.setAttribute('width', '100%')
  svg.setAttribute('height', '100%')
  return svg.outerHTML
}

const sources = [
  {
    id: 'applications-block-1',
    // class: 'fa fa-map-o',
    class: '',
    label: a1s,
    // label: 'b2s().outerHTML',
    content: a1,
    category: 'Application',
    // order: 1
  },
  {
    id: 'cta-block-1',
    class: '',
    label: c1s,
    content: c1,
    category: 'CTA',
    // order: 1
  },
  {
    id: 'cta-block-2',
    class: '',
    label: c2s,
    content: c2,
    category: 'CTA',
    // order: 1
  },
  {
    id: 'cta-block-3',
    class: '',
    label: c3s,
    content: c3,
    category: 'CTA',
    // order: 1
  },
  {
    id: 'cta-block-4',
    class: '',
    label: c4s,
    content: c4,
    category: 'CTA',
    // order: 1
  },
  {
    id: 'cta-block-5',
    class: '',
    label: c5s,
    content: c5,
    category: 'CTA',
    // order: 1
  },
  {
    id: 'faq-block-1',
    class: '',
    label: f1s,
    content: f1,
    category: 'FAQ',
    // order: 1
  },
  {
    id: 'faq-block-2',
    class: '',
    label: f2s,
    content: f2,
    category: 'FAQ',
    // order: 1
  },
  {
    id: 'faq-block-3',
    class: '',
    label: f3s,
    content: f3,
    category: 'FAQ',
    // order: 1
  },
  {
    id: 'feature-block-1',
    class: '',
    label: f4s,
    content: f4,
    category: 'Features',
    // order: 1
  },
  {
    id: 'feature-block-2',
    class: '',
    label: f5s,
    content: f5,
    category: 'Features',
    // order: 1
  },
  {
    id: 'feature-block-3',
    class: '',
    label: f6s,
    content: f6,
    category: 'Features',
    // order: 1
  },
  {
    id: 'feature-block-4',
    class: '',
    label: f7s,
    content: f7,
    category: 'Features',
    // order: 1
  },
  {
    id: 'feature-block-5',
    class: '',
    label: f8s,
    content: f8,
    category: 'Features',
    // order: 1
  },
  {
    id: 'feature-block-6',
    class: '',
    label: f9s,
    content: f9,
    category: 'Features',
    // order: 1
  },
  {
    id: 'howitworks-block-1',
    class: '',
    label: h1s,
    content: h1,
    category: 'HowItWorks',
    // order: 1
  },
  {
    id: 'howitworks-block-2',
    class: '',
    label: h2s,
    content: h2,
    category: 'HowItWorks',
    // order: 1
  },
  {
    id: 'httpcodes-block-1',
    class: '',
    label: h3s,
    content: h3,
    category: 'HTTP_CODES',
    // order: 1
  },
  {
    id: 'navigation-block-1',
    class: '',
    label: n1s,
    content: n1,
    category: 'NAVIGATION',
    // order: 1
  },
  {
    id: 'navigation-block-2',
    class: '',
    label: n2s,
    content: n2,
    category: 'NAVIGATION',
    // order: 1
  },
  {
    id: 'portfolio-block-1',
    class: '',
    label: p1s,
    content: p1,
    category: 'PORTFOLIO',
    // order: 1
  },
  {
    id: 'portfolio-block-2',
    class: '',
    label: p2s,
    content: p2,
    category: 'PORTFOLIO',
    // order: 1
  },
  {
    id: 'pricing-block-1',
    class: '',
    label: p3s,
    content: p3,
    category: 'Pricing',
    // order: 1
  },
  {
    id: 'pricing-block-2',
    class: '',
    label: p4s,
    content: p4,
    category: 'Pricing',
    // order: 1
  },
  {
    id: 'pricing-block-3',
    class: '',
    label: p5s,
    content: p5,
    category: 'Pricing',
    // order: 1
  },
  {
    id: 'pricing-block-4',
    class: '',
    label: p6s,
    content: p6,
    category: 'Pricing',
    // order: 1
  },
  {
    id: 'signup-block-1',
    class: '',
    label: s1s,
    content: s1,
    category: 'Auth',
    // order: 1
  },
  {
    id: 'signup-block-2',
    class: '',
    label: s2s,
    content: s2,
    category: 'Auth',
    // order: 1
  },
  {
    id: 'signup-block-3',
    class: '',
    label: s3s,
    content: s3,
    category: 'Auth',
    // order: 1
  },
  {
    id: 'team-block-1',
    class: '',
    label: t1s,
    content: t1,
    category: 'Team',
    // order: 1
  },
  {
    id: 'testimonial-block-1',
    class: '',
    label: t2s,
    content: t2,
    category: 'Testimonials',
    // order: 1
  },
  {
    id: 'testimonial-block-2',
    class: '',
    label: t3s,
    content: t3,
    category: 'Testimonials',
    // order: 1
  },
  {
    id: 'testimonial-block-3',
    class: '',
    label: t4s,
    content: t4,
    category: 'Testimonials',
    // order: 1
  }
]

export default (editor, options = {}) => {
  const bm = editor.Blocks

  sources.forEach((s) => {
    bm.add(s.id, {
      label: getSvgHtml(editor.$(s.label).get(0)),
      attributes: { class: `${s.class} block-full-width` },
      content: s.content,
      category: { label: s.category, open: s.category === options.openCategory },
    })
  })
}
