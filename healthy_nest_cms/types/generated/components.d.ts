import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAddress extends Struct.ComponentSchema {
  collectionName: 'components_shared_addresses';
  info: {
    displayName: 'Address';
  };
  attributes: {
    City: Schema.Attribute.String & Schema.Attribute.Required;
    Country: Schema.Attribute.String & Schema.Attribute.Required;
    Landmark: Schema.Attribute.Text;
    Latitude: Schema.Attribute.Decimal;
    Line1: Schema.Attribute.Text & Schema.Attribute.Required;
    Line2: Schema.Attribute.Text;
    Locality: Schema.Attribute.String;
    Longitude: Schema.Attribute.Decimal;
    PostalCode: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    State: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCatalogItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_catalog_items';
  info: {
    displayName: 'CatalogItem';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SharedNumberRange extends Struct.ComponentSchema {
  collectionName: 'components_shared_number_ranges';
  info: {
    displayName: 'PriceRange';
  };
  attributes: {
    maximum: Schema.Attribute.Decimal & Schema.Attribute.Required;
    minimum: Schema.Attribute.Decimal & Schema.Attribute.Required;
    PricingUnit: Schema.Attribute.Enumeration<['HOUR', 'DAY', 'MONTH']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'MONTH'>;
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
      'shared.address': SharedAddress;
      'shared.catalog-item': SharedCatalogItem;
      'shared.media': SharedMedia;
      'shared.number-range': SharedNumberRange;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
