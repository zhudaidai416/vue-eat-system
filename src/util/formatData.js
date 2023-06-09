import moment from 'moment'

const options = {
	bind(el, binding) {
		// console.log(binding.arg)
		el.timestamp = el.innerHTML.trim()
		el.innerHTML = moment().format(pattern)
	},
	inserted(el, binding) {},
	update(el, binding) {},
	componentUpdated(el, binding) {},
	unbind(el, binding) {},
}

export default options
