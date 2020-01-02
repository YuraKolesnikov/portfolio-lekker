module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: `
					@import "~@/assets/scss/reboot";
					@import "~@/assets/scss/vars.scss";
				`
			},
			css: {
        modules: {
          localIdentName: '[name]_[hash:base64:8]'
        }
      }
		},
		requireModuleExtension: true,
	}
}