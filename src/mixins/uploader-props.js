export default {
  props: {
    filename  : { type: String, default: 'record'   },
    format    : { type: String, default: 'mp3'      },
    headers   : { type: Object, default: () => ({}) },
    uploadUrl : { type: String                      },
    someparams: { type: Object, default: { 'param1': 'value1' } },
  }
}
