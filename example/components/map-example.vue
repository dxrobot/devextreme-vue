<template>
    <example-block title="dxMap">
<<<<<<< HEAD
        <button @click="updatePos">Move!</button>
=======
>>>>>>> 59f324ed156fcb8f7f724856bf162f52baac79c3
        <dx-map
            provider="bing"
            :zoom="11"
            :height="440"
            :controls="true"
        >
            <dx-marker iconSrc="https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png">
                <dx-location :lat="40.755833" :lng="-73.986389" />
                <dx-tooltip text="Times Square" />
            </dx-marker>
<<<<<<< HEAD

=======
>>>>>>> 59f324ed156fcb8f7f724856bf162f52baac79c3
            <dx-marker iconSrc="https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png">
                <dx-location :lat="40.7825" :lng="-73.966111" />
                <dx-tooltip text="Central Park" />
            </dx-marker>

<<<<<<< HEAD
            <dx-marker>
                <dx-location :lat="currentPos.lat" :lng="currentPos.lng" />
            </dx-marker>

            <dx-route color="green">
                <dx-location :lat="40.755833" :lng="-73.986389" />
                <dx-location :lat="40.7825" :lng="-73.966111" />
                <dx-location :lat="currentPos.lat" :lng="currentPos.lng" />
=======
            <dx-route color="green">
                <dx-location :lat="40.755833" :lng="-73.986389" />
                <dx-location :lat="40.7825" :lng="-73.966111" />
>>>>>>> 59f324ed156fcb8f7f724856bf162f52baac79c3
            </dx-route>
        </dx-map>
    </example-block>
</template>

<script>
import ExampleBlock from "./example-block";

import { DxMap, DxMarker, DxLocation, DxTooltip, DxRoute } from "../../src/map";

<<<<<<< HEAD
const startPos = {
    lat: 40.71000,
    lng: -73.91000
};

=======
>>>>>>> 59f324ed156fcb8f7f724856bf162f52baac79c3
export default {
  components: {
    ExampleBlock,
    DxMap,
    DxMarker,
    DxLocation,
    DxTooltip,
    DxRoute
  },
  data: function() {
    return {
<<<<<<< HEAD
        startPos,
        currentPos: { ...startPos }
    };
  },
  methods: {
      updatePos() {
          this.currentPos.lat += 0.03;
          this.currentPos.lng += 0.15;
      }
=======
      buttonAttrs: {
        style: "background-color: #ffc"
      }
    };
>>>>>>> 59f324ed156fcb8f7f724856bf162f52baac79c3
  }
};
</script>