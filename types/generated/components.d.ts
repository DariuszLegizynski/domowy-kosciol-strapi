import type { Schema, Attribute } from '@strapi/strapi';

export interface BaseBaseImage extends Schema.Component {
  collectionName: 'components_base_base_images';
  info: {
    displayName: 'BaseImage';
    icon: 'picture';
  };
  attributes: {
    foto: Attribute.Media;
    author: Attribute.String;
  };
}

export interface BaseContentImage extends Schema.Component {
  collectionName: 'components_base_content_images';
  info: {
    displayName: 'baseImageContent';
    icon: 'layout';
    description: '';
  };
  attributes: {
    content: Attribute.Blocks;
    image: Attribute.Component<'base.base-image'>;
  };
}

export interface BaseTitleContent extends Schema.Component {
  collectionName: 'components_base_title_contents';
  info: {
    displayName: 'baseTitleContent';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Blocks;
  };
}

export interface SectionAboutUsIcon extends Schema.Component {
  collectionName: 'components_section_about_us_icons';
  info: {
    displayName: 'aboutUsIcon';
    icon: 'picture';
  };
  attributes: {
    aboutUsIconContent: Attribute.Component<'base.content-image', true>;
  };
}

export interface SectionAboutUsMain extends Schema.Component {
  collectionName: 'components_section_about_us_mains';
  info: {
    displayName: 'AboutUsMain';
    icon: 'file';
  };
  attributes: {
    title: Attribute.String;
    aboutUsContent: Attribute.Component<'base.content-image', true>;
  };
}

export interface SectionAboutUsTestimonials extends Schema.Component {
  collectionName: 'components_section_about_us_testimonials';
  info: {
    displayName: 'aboutUsTestimonials';
    icon: 'bulletList';
  };
  attributes: {
    aboutUsTestimonialsContent: Attribute.Component<'base.title-content', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'base.base-image': BaseBaseImage;
      'base.content-image': BaseContentImage;
      'base.title-content': BaseTitleContent;
      'section.about-us-icon': SectionAboutUsIcon;
      'section.about-us-main': SectionAboutUsMain;
      'section.about-us-testimonials': SectionAboutUsTestimonials;
    }
  }
}
