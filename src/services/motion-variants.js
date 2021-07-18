export const navbar_variants = {
	hidden: {
		y: '-30vh'
	},
	visible: {
		y: 0,
		transition: {
			dealy: 0.2,
			duration: 0.7,
			type: 'spring'
		}
	}
}

export const sidebar_variants = {
	hidden: {
        x: '-20vh',
    },
    visible: {
        x: 0,
        transition: {
            dealy: 0.2,
            duration: 0.7,
            type: 'spring'
        }
    }
}

export const load_variants = {
	hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            dealy: 0.2,
            duration: 0.7
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: 'easeInOut'
        }
    }
}
