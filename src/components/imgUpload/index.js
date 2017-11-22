import { upload as ajax } from 'services'
export default {
    name: 'PgUpload',
    props: {
        multiple: {
            type: Boolean,
            default: false,
        },
        accept: {
            type: String,
            default: ''
        },
        folderType: {
            type: String,
            default: '11'
        },
        text: {
            type: String,
            default: '上传图片'
        },
        id: String,
        type: {
            type: String,
            default: 'default'
        }
    },
    methods: {
        handleClick() {
            this.$refs.input.click()
        },
        handleChange(e) {
            const files = e.target.files
            if (!files)
                return

            this.uploadFiles(files)
            this.$refs.input.value = null
        },
        uploadFiles(files) {
            let postFiles = Array.prototype.slice.call(files)
            if (postFiles.length === 0)
                return
            if (!this.multiple)
                postFiles = postFiles.slice(0, 1)

            postFiles.forEach(file => {
                this.upload(file)
            })
        },
        upload(file) {
            ajax.uploadImg(file, this.folderType).then((result) => {
                this.handleSuccess(result, file)
            })
        },
        handleSuccess(res, file) {
            if (this.multiple) {
                this.fileList.push(res)
            }
            else {
                this.fileList = []
                this.fileList.push(res)
            }
            if (this.id) {
                this.$emit('upload-success', this.id, this.multiple ? this.fileList : this.fileList[0])
            }
            else {
                this.$emit('upload-success', this.multiple ? this.fileList : this.fileList[0])
            }
        }
    }
}