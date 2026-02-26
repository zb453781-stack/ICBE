# Sanity CMS Schema Setup Guide

This guide will help you set up the content schemas in your Sanity CMS project to match the ICBE website structure.

## 📋 Prerequisites

1. Sanity CLI installed: `npm install -g sanity`
2. Sanity project created
3. Sanity Studio running

## 🔧 Creating Schemas

In your Sanity project, create files in `schemas/` directory with the following content:

### 1. Homepage Schema (`schemas/homepage.ts`)

```typescript
export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main headline for the homepage hero section'
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      description: 'Subheading for hero section'
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string'
    },
    {
      name: 'ctaLink',
      title: 'CTA Button Link',
      type: 'string'
    },
    {
      name: 'impactStats',
      title: 'Impact Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'number' },
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'suffix', title: 'Suffix (e.g., +)', type: 'string' }
          ]
        }
      ]
    }
  ]
}
```

### 2. About Page Schema (`schemas/about.ts`)

```typescript
export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'text'
    },
    {
      name: 'vision',
      title: 'Vision Statement',
      type: 'text'
    },
    {
      name: 'mission',
      title: 'Mission Statement',
      type: 'text'
    },
    {
      name: 'objectives',
      title: 'Objectives',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'coreValues',
      title: 'Core Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Value Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' }
          ]
        }
      ]
    },
    {
      name: 'timeline',
      title: 'Organization Timeline',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'year', title: 'Year', type: 'string' },
            { name: 'title', title: 'Milestone', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' }
          ]
        }
      ]
    }
  ]
}
```

### 3. Services Schema (`schemas/service.ts`)

```typescript
export default {
  name: 'service',
  title: 'Service/Program',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide React icon name (e.g., Sprout, Shield, Users)'
    },
    {
      name: 'image',
      title: 'Service Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'impactFocus',
      title: 'Impact Focus Areas',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'targetAudience',
      title: 'Target Audience',
      type: 'string'
    },
    {
      name: 'outcomes',
      title: 'Expected Outcomes',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
}
```

### 4. Gallery Image Schema (`schemas/galleryImage.ts`)

```typescript
export default {
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Image Title',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'text'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Climate Resilience', value: 'climate' },
          { title: 'Gender-Based Violence', value: 'gbv' },
          { title: 'Youth Leadership', value: 'youth' },
          { title: 'Mental Health', value: 'mental-health' },
          { title: 'Community Events', value: 'events' }
        ]
      }
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string'
    },
    {
      name: 'featured',
      title: 'Featured Image',
      type: 'boolean'
    }
  ]
}
```

### 5. Contact Information Schema (`schemas/contactInfo.ts`)

```typescript
export default {
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    {
      name: 'address',
      title: 'Office Address',
      type: 'text'
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string'
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string'
    },
    {
      name: 'mapUrl',
      title: 'Google Maps Embed URL',
      type: 'url'
    },
    {
      name: 'officeHours',
      title: 'Office Hours',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'day', title: 'Day', type: 'string' },
            { name: 'hours', title: 'Hours', type: 'string' }
          ]
        }
      ]
    }
  ]
}
```

### 6. Team Member Schema (`schemas/teamMember.ts`)

```typescript
export default {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string'
    },
    {
      name: 'position',
      title: 'Position/Role',
      type: 'string'
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'twitter', title: 'Twitter URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
        { name: 'instagram', title: 'Instagram URL', type: 'url' }
      ]
    }
  ]
}
```

## 📝 Schema Index File

Create `schemas/index.ts`:

```typescript
import homepage from './homepage'
import aboutPage from './about'
import service from './service'
import galleryImage from './galleryImage'
import contactInfo from './contactInfo'
import teamMember from './teamMember'

export const schemaTypes = [
  homepage,
  aboutPage,
  service,
  galleryImage,
  contactInfo,
  teamMember
]
```

## 🔌 Connecting to React App

The React app already has Sanity client configured in `src/lib/sanity.ts`. 

Example fetch in a React component:

```typescript
import { useEffect, useState } from 'react'
import { fetchFromSanity } from '@/lib/sanity'

export function HomePage() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFromSanity(`*[_type == "homepage"][0]`)
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading...</div>
  if (!data) return <div>No data found</div>

  return (
    <div>
      <h1>{data.heroTitle}</h1>
      <p>{data.heroSubtitle}</p>
    </div>
  )
}
```

## 🖼️ Image Optimization with Cloudinary

Add Cloudinary source plugin to Sanity:

1. In Sanity Studio, install plugin:
```bash
sanity install @sanity/asset-source-cloudinary
```

2. Configure in `sanity.config.ts`:

```typescript
{
  name: 'default',
  assetSources: [
    assetSourceCloudinary
  ]
}
```

## 🔒 CORS Configuration

In Sanity dashboard (`sanity.io`):

1. Go to Project Settings → API
2. Add CORS origin:
   - Development: `http://localhost:5173`, `http://localhost:5174`
   - Production: `https://yourdomain.com`

## 🚀 Publishing Content

1. Create content in Sanity Studio
2. Click "Publish" on each document
3. Refresh React app to see changes (or implement real-time sync)

## ✅ Content Checklist

- [ ] Create Homepage document
- [ ] Create About Page document
- [ ] Create 5-10 Service documents
- [ ] Upload 20+ Gallery Images
- [ ] Create Contact Information document
- [ ] Add Team Members (optional)
- [ ] Configure CORS
- [ ] Test data fetching in React

## 📚 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Studio Guide](https://www.sanity.io/docs/sanity-studio)
- [Groq Query Reference](https://www.sanity.io/docs/groq)
- [Sanity React Client](https://www.sanity.io/docs/js-client)

---

Once you've completed this setup, your React app will have access to all the content managed through Sanity CMS!
