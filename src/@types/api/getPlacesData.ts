interface RootObject {
  data: Datum[];
  filters: Filters;
  filters_v2: Filtersv2;
  restaurant_availability_options: Restaurantavailabilityoptions;
  open_hours_options: Openhoursoptions;
  paging: Paging;
}

interface Paging {
  results: string;
  total_results: string;
}

interface Openhoursoptions {
  closed_count: string;
  is_set: boolean;
  low_coverage_primary_message: string;
  timezone: string;
  unsure_count: string;
  open_count: string;
  low_coverage_secondary_message: string;
  current_value: string;
}

interface Restaurantavailabilityoptions {
  day: string;
  month: string;
  year: string;
  hour: string;
  minute: string;
  people: string;
  datestring: string;
  is_default: boolean;
  is_set: boolean;
  racable: boolean;
  time_options: Timeoptions;
  people_options: Timeoptions;
}

interface Timeoptions {
  selected_option: Selectedoption;
  options: Option2[];
}

interface Option2 {
  value: string;
  display: string;
  selected?: boolean;
}

interface Selectedoption {
  value: string;
  display: string;
  selected: boolean;
}

interface Filtersv2 {
  search_filters: Searchfilter[];
  filter_sections: Filtersection[];
  metadata: Metadata;
}

interface Metadata {
  sort: string;
}

interface Filtersection {
  label: string;
  section_id: string;
  filter_groups: Filtergroup[];
}

interface Filtergroup {
  type: string;
  key: string;
  tracking_key: string;
  label: string;
  options: Option[];
}

interface Option {
  label: string;
  value: string;
  selected: boolean;
  count: string;
  default: boolean;
  single_select?: boolean;
}

interface Searchfilter {
  key: string;
  value: string;
}

interface Filters {
  rac_deals_only: Racdealsonly;
  rating: Rating;
  restaurant_mealtype: Restaurantmealtype;
  exclude_locations: Excludelocations;
  dietary_restrictions: Dietaryrestrictions;
  rsrv: Racdealsonly;
  restaurant_tagcategory: Restauranttagcategory;
  open_now: Racdealsonly;
  min_rating: Minrating;
  subcategory: Subcategory2;
  prices_restaurants: Pricesrestaurants;
  restaurant_dining_options: Restaurantdiningoptions;
  restaurant_tagcategory_standalone: Restauranttagcategory;
  restaurant_styles: Dietaryrestrictions;
  combined_food: Combinedfood;
}

interface Combinedfood {
  '10346': _10597;
  '10642': _10597;
  '10654': _10597;
  '10659': _10597;
  '10675': _10597;
  '22047': _10597;
  all: _10597;
}

interface Restaurantdiningoptions {
  '10601': _10597;
  '10602': _10597;
  '10603': _10597;
  '10854': _10597;
  '10870': _10597;
  all: _10597;
}

interface Pricesrestaurants {
  '10953': _10597;
  '10955': _10597;
  all: _10597;
}

interface Subcategory2 {
  all: False;
  sit_down: False;
  cafe: False;
  fast_food: False;
}

interface Minrating {
  '3': False;
  '4': False;
  '5': False;
}

interface Restauranttagcategory {
  '9900': _10597;
  '10591': _10597;
  all: _10597;
}

interface Dietaryrestrictions {
  all: _10597;
}

interface Excludelocations {
  filtered: Filtered;
  all: Filtered;
}

interface Filtered {
  count: string;
  label: string;
}

interface Restaurantmealtype {
  '10597': _10597;
  '10598': _10597;
  '10599': _10597;
  all: _10597;
}

interface _10597 {
  count: string;
  label: string;
  locale_independent_label: string;
  priority: string;
  selected: boolean;
}

interface Rating {
  '1': False;
  '2': False;
  '3': False;
  '4': False;
  '5': False;
  all: False;
}

interface Racdealsonly {
  false: False;
  true: False;
}

interface False {
  count: string;
  label: string;
  selected: boolean;
}

export interface Datum {
  location_id: string;
  name?: string;
  latitude?: string;
  longitude?: string;
  num_reviews?: string;
  timezone?: string;
  location_string?: string;
  photo?: Photo;
  awards?: any[];
  doubleclick_zone: string;
  preferred_map_engine?: string;
  raw_ranking?: string;
  ranking_geo?: string;
  ranking_geo_id?: string;
  ranking_position?: string;
  ranking_denominator?: string;
  ranking_category?: string;
  ranking?: string;
  distance?: string;
  distance_string?: string;
  bearing?: string;
  rating?: string;
  is_closed?: boolean;
  open_now_text?: string;
  is_long_closed?: boolean;
  price_level?: string;
  price?: string;
  description?: string;
  web_url?: string;
  write_review?: string;
  ancestors: Ancestor[];
  category?: Subcategory;
  subcategory?: Subcategory[];
  parent_display_name?: string;
  is_jfy_enabled?: boolean;
  nearest_metro_station?: any[];
  phone?: string;
  website?: string;
  email?: string;
  address_obj?: Addressobj;
  address?: string;
  hours?: Hours;
  is_candidate_for_contact_info_suppression?: boolean;
  cuisine?: Subcategory[];
  dietary_restrictions?: any[];
  establishment_types?: Subcategory[];
  ad_position?: string;
  ad_size?: string;
  detail?: string;
  page_type?: string;
  mob_ptype?: string;
}

interface Hours {
  week_ranges: Weekrange[][];
  timezone: string;
}

interface Weekrange {
  open_time: number;
  close_time: number;
}

interface Addressobj {
  street1: string;
  street2?: string;
  city: string;
  state?: any;
  country: string;
  postalcode?: string;
}

interface Ancestor {
  subcategory: Subcategory[];
  name: string;
  abbrv?: any;
  location_id: string;
}

interface Subcategory {
  key: string;
  name: string;
}

interface Photo {
  images: Images;
  is_blessed: boolean;
  uploaded_date: string;
  caption: string;
  id: string;
  helpful_votes: string;
  published_date: string;
  user: User;
}

interface User {
  user_id?: any;
  member_id: string;
  type: string;
}

interface Images {
  small: Small;
  thumbnail: Small;
  original: Small;
  large: Small;
  medium: Small;
}

interface Small {
  width: string;
  url: string;
  height: string;
}