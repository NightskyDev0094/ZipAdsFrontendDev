/**
 * The point of this is to make sure input fields have character limits
 * as to not throw an error from the backend
 */
export const CAMPAIGN_DEFINITION = {
  CAMPAIGN_NAME: { max_length: 100, blank: true },
  GOOGLE_SEARCH_AD: { max_length: 100, blank: true },
  GOOGLE_DISPLAY_AD: { max_length: 100, blank: true },
  FACEBOOK_FEED_AD: { max_length: 100, blank: true },
  FACEBOOK_DISPLAY_AD: { max_length: 100, blank: true },
  INSTAGRAM_AD: { max_length: 100, blank: true },
  GA_KEYWORD_PLAN: { max_length: 1000, blank: true },
  GA_LOCATION_PLAN: { max_length: 1000, blank: true },
  FB_INTEREST_PLAN: { max_length: 1000, blank: true },
  FB_LOCATION_PLAN: { max_length: 1000, blank: true },
  GEOTARGETING: { max_length: 100, blank: true },
  STREET_ADDRESS: { max_length: 300, blank: true },
  CITY_NAME: { max_length: 100, blank: true },
  STATE_CODE: { max_length: 100, blank: true },
  ZIP_CODE: { max_length: 100, blank: true },
  GOOGLE_ACCOUNT_ID: { max_length: 1000, blank: true },
  FACEBOOK_ACCOUNT_ID: { max_length: 1000, blank: true },
  FAECBOOK_PAGE_ID: { max_length: 1000, blank: true },
  OBJECTIVE: { max_length: 100, blank: true },
  GOOGLE_SEARCH_BUDGET: { max_length: 25, blank: true },
  GOOGLE_CPC: { max_length: 25, blank: true },
  GOOGLE_DISPLAY_BUDGET: { max_length: 25, blank: true },
  FACEBOOK_FEED_BUDGET: { max_length: 25, blank: true },
  FAECBOOK_AUDIENCE_BUDGET: { max_length: 25, blank: true },
  INSTAGRAM_BUDGET: { max_length: 25, blank: true },
  HEADLINE: { max_length: 50, blank: true },
  HEADLINE2: { max_length: 50, blank: true },
  AD_DESCRIPTION: { max_length: 100, blank: true },
  CTA: { max_length: 125, blank: true },
  CTA2: { max_length: 125, blank: true },
  AD_LINK: { max_length: 125, blank: true },
  AD_GROUP_NAME: { max_length: 125, blank: true },
  GA_CAMPAIGN_LENGTH: { max_length: 25, blank: true },
  FB_CAMPAIGN_LENGTH: { max_length: 25, blank: true },
  FILE_URL: { max_length: 999, blank: true },
  // file_upload = models.ImageField(upload_to='photos/%Y/%m/%d/',
  //                                 null=true,
  //                                 blank=true)
  // company_logo_file = models.ImageField(upload_to='photos/%Y/%m/%d/',
  //                                         null=true,
  //                                         blank=true)
  // company_logo_url =  models.CharField(max_length=999, blank=true)
};
