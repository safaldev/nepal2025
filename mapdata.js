var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    viewportWidth : window.innerWidth,
    width: window.innerWidth > 700? '700': 'responsive', //'700' or 'responsive'
    background_color: "yes",
    background_transparent: "yes",
    border_color: "#003893",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#DC143C",
    state_url: "",
    border_size: "3",
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#ff0000",
    location_opacity: ".8",
    location_hover_opacity: 1,
    location_size: "15",
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "no",
    state_image_url: "",
    state_image_position: "",
    location_image_url: "",
    border_hover_color: "#003893",
    border_hover_size: "4"
  },
  state_specific: {
    NPBA: {
      name: "Bagmati",
      description: "Home to the capital, Kathmandu"
    },
    NPBH: {
      name: "Bheri",
      description: "Central location in the Mid-Western region"
    },
    NPDH: {
      name: "Dhawalagiri",
      description: "Named after Mt. Dhaulagiri; remote trekking"
    },
    NPGA: {
      name: "Gandaki",
      description: "Home to city of lakes, Pokhara"
    },
    NPJA: {
      name: "Janakpur",
      description: "Home to religious city, Janakpur"
    },
    NPKA: {
      name: "Karnali",
      description: "Largest zone by area and most remote; home to Rara Lake"
    },
    NPKO: {
      name: "Koshi",
      description: "Home to Koshi Tappu Wildlife Reseve"
    },
    NPLU: {
      name: "Lumbini",
      description: "Birthplace of Gautam Buddha; major trade hub"
    },
    NPMA: {
      name: "Mahakali",
      description: "Westernmost zone of Nepal"
    },
    NPME: {
      name: "Mechi",
      description: "Easternmost point"
    },
    NPNA: {
      name: "Narayani",
      description: "Commercial and industrial corridor"
    },
    NPRA: {
      name: "Rapti",
      description: "Area of important national parks and wildlife"
    },
    NPSA: {
      name: "Sagarmatha",
      description: "Home to Mt. Everest"
    },
    NPSE: {
      name: "Seti",
      description: "Western region with varying landscapes"
    }
  },
  locations: {
    "0": {
      name: "Kathmandu",
      lng: "85.316667",
      lat: "27.716667"
    }
  },
  labels: {
    NPBA: {
      name: "Bagmati",
      parent_id: "NPBA"
    },
    NPBH: {
      name: "Bheri",
      parent_id: "NPBH"
    },
    NPDH: {
      name: "Dhawalagiri",
      parent_id: "NPDH"
    },
    NPGA: {
      name: "Gandaki",
      parent_id: "NPGA"
    },
    NPJA: {
      name: "Janakpur",
      parent_id: "NPJA"
    },
    NPKA: {
      name: "Karnali",
      parent_id: "NPKA"
    },
    NPKO: {
      name: "Bhojpur",
      parent_id: "NPKO"
    },
    NPLU: {
      name: "Lumbini",
      parent_id: "NPLU"
    },
    NPMA: {
      name: "Mahakali",
      parent_id: "NPMA"
    },
    NPME: {
      name: "Mechi",
      parent_id: "NPME"
    },
    NPNA: {
      name: "Narayani",
      parent_id: "NPNA"
    },
    NPRA: {
      name: "Rapti",
      parent_id: "NPRA"
    },
    NPSA: {
      name: "Sagarmatha",
      parent_id: "NPSA"
    },
    NPSE: {
      name: "Seti",
      parent_id: "NPSE"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};