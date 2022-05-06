import { CloseButton } from '../../CloseButton'
import imageSucessURL from '../../../assets/Success.svg'

interface FeedbackSucessStepProps {
	onFeedbackRestartRequested: () => void
}

export function FeedbackSucessStep({ onFeedbackRestartRequested }: FeedbackSucessStepProps) {
	return (
		<>
			<header>
				<CloseButton />
			</header>

			<div className="flex flex-col items-center py-10 w-[304px]">
				<img src={imageSucessURL} alt="Imagem com o botão verde de cheque de sucesso" />
			</div>
			<span className="text-xl mt-2">Agradecemos o feedback!</span>
			<button
				type="button"
				onClick={onFeedbackRestartRequested}
				className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:border=brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none"
			>
				Quero enviar outro
			</button>
		</>
	)
}