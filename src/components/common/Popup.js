import { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Popup = forwardRef((props, ref) => {
	const [Open, setOpen] = useState(false);

	useEffect(() => {
		Open
			? (document.body.style.overflowY = 'hidden')
			: (document.body.style.overflowY = 'auto');
	});

	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
		};
	});

	return (
		<AnimatePresence>
			{Open && (
				<motion.aside
					className='pop'
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, transition: { duration: 0.5 }, scale: 1 }}
					exit={{
						opacity: 0,
						scale: 0,
						transition: { duration: 0.5, delay: 0.5 },
					}}>
					<motion.div
						className='con'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
						exit={{ opacity: 0, transition: { duration: 0.5 } }}>
						{props.children}
					</motion.div>
					<motion.span
						className='close'
						onClick={() => setOpen(false)}
						initial={{ x: 100, opacity: 0 }}
						animate={{
							x: 0,
							opacity: 1,
							transition: { duration: 0.5, delay: 0.5 },
						}}
						exit={{ opacity: 0, x: 100 }}>
						<FontAwesomeIcon icon={faXmark} />
					</motion.span>
				</motion.aside>
			)}
		</AnimatePresence>
	);
});

export default Popup;
