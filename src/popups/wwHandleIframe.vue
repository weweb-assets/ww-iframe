<template>
    <div class="ww-iframe-popup ww-scroll-bar">
        <textarea
            v-model="source"
            class="script__input ww-editor-input -textarea -large caption-m"
            rows="23"
            placeholder="Your iframe code"
            @input="setResult($event)"
        ></textarea>
    </div>
</template>

<script>
export default {
    name: 'WwHandleIframe',
    props: {
        options: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    data() {
        return {
            source: undefined,
        };
    },
    mounted() {
        this.source = this.options.data.options.source;
        this.setResult();
    },
    methods: {
        setResult() {
            // eslint-disable-next-line vue/no-mutating-props
            this.options.result.source = this.source;
        },
    },
};
</script>

<style scoped lang="scss">
.ww-iframe-popup {
    .script__input {
        width: 100%;
    }
}
</style>
