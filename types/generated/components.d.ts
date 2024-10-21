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

export interface BaseTitleContent extends Schema.Component {
  collectionName: 'components_base_title_contents';
  info: {
    displayName: 'titleContent';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'base.base-image': BaseBaseImage;
      'base.title-content': BaseTitleContent;
    }
  }
}
