<template>
    <example-block title="dxTabPanel">
        <dx-tab-panel :items="tabs">
<<<<<<< HEAD
            <template #tab1>
                <h3>First Tab Content</h3>
            </template>
            <template #tab2>
                <async-component/>
            </template>
=======
            <div slot="tab1" slot-scope="_">
                <h3>First Tab Content</h3>
            </div>
            <div slot="tab2" slot-scope="_">
                <async-component/>
            </div>
>>>>>>> 59f324ed156fcb8f7f724856bf162f52baac79c3
        </dx-tab-panel>
    </example-block>
</template>

<script>
import Vue from "vue";
import ExampleBlock from "./example-block";
import { DxTabPanel } from "../../src";

const SecondTabComponent = Vue.extend({
    template: "<h3>Second Tab Content</h3>"
});

export default {
  components: {
    ExampleBlock,
    DxTabPanel,
    AsyncComponent: () => Promise.resolve(SecondTabComponent)
  },
  data: function() {
    return {
        tabs: [
          { title:"Sync Tab", template:"tab1" },
          { title:"Async Tab", template:"tab2" }
        ]
    };
  }
};
</script>