const VALID_PLACEMENTS = ['prepend', 'content', 'append'];

const plugin = async (schema, documents, config) => {
    const placement = config.placement || 'prepend';
    const content = config.content;
    if (!VALID_PLACEMENTS.includes(placement)) {
        throw Error(`Configuration provided for 'add' plugin is invalid: value of 'placement' field is not valid (valid values are: ${VALID_PLACEMENTS.join(', ')})`);
    }
    if (!content) {
        throw Error(`Configuration provided for 'add' plugin is invalid: "content" is missing!`);
    }
    return {
        content: null,
        [placement]: Array.isArray(content) ? content : [content],
    };
};
const index = { plugin };

export default index;
export { plugin };
