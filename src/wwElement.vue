<template>
    <div ref="iframe" class="ww-iframe" :class="{ isEditing: isEditing }">
        <iframe v-if="content.source && isValidHttpUrl" class="iframe-holder" :src="content.source" />
        <!-- wwEditor:start -->
        <div v-else-if="content.source && !isValidHttpUrl" class="placeholder">Enter a valid URL</div>
        <div v-else class="placeholder">Edit iFrame source in settings</div>
        <!-- wwEditor:end -->
    </div>
</template>

<script>
export default {
    props: {
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
        content: { type: Object, required: true },
    },
    emits: ['update:content'],
    data() {
        return {
            reset: false,
        };
    },
    computed: {
        isEditing() {
            /* wwEditor:start */
            return this.wwEditorState.editMode === wwLib.wwEditorHelper.EDIT_MODES.EDITION;
            /* wwEditor:end */
            // eslint-disable-next-line no-unreachable
            return false;
        },
        isValidHttpUrl() {
            let url;

            try {
                url = new URL(this.content.source);
            } catch (_) {
                return false;
            }

            return url.protocol === 'http:' || url.protocol === 'https:';
        },
    },
};
</script>

<style lang="scss" scoped>
.ww-iframe {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 10px;
    .iframe-holder {
        position: absolute;
        height: 100%;
        width: 100%;
        border: none;
    }
    /* wwEditor:start */
    &.isEditing {
        pointer-events: none;
    }
    .placeholder {
        width: 100%;
        height: 100%;
        min-height: 300px;
        background-color: #e4e4e4;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--ww-color-blue-500);
    }
    /* wwEditor:end */
}
</style>
