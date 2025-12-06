import type { Schema, Struct } from '@strapi/strapi';

export interface DirectionHero extends Struct.ComponentSchema {
  collectionName: 'components_direction_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    availabilityDormitory: Schema.Attribute.Boolean;
    availabilityMilitaryDepartment: Schema.Attribute.Boolean;
    code: Schema.Attribute.String;
    direction_accent_color: Schema.Attribute.Relation<
      'oneToOne',
      'api::direction-accent-color.direction-accent-color'
    >;
    durationStudy: Schema.Attribute.String;
    educationForm: Schema.Attribute.String;
    fullName: Schema.Attribute.String;
    passingGrade: Schema.Attribute.String;
    price: Schema.Attribute.Integer;
    shortName: Schema.Attribute.String;
  };
}

export interface DirectionProfessions extends Struct.ComponentSchema {
  collectionName: 'components_direction_professions';
  info: {
    displayName: 'Professions';
  };
  attributes: {
    professions: Schema.Attribute.Relation<
      'oneToMany',
      'api::direction-profession.direction-profession'
    >;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'direction.hero': DirectionHero;
      'direction.professions': DirectionProfessions;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
