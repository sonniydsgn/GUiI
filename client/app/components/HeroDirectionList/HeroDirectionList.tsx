interface HeroDirectionsInfo {
	id: number;
	characteristic: string;
	value: string;
}

interface HeroDirectionListProps {
	data: HeroDirectionsInfo[]
}

const HeroDirectionList = ({data}: HeroDirectionListProps) => {
	return (
		<dl className="hero-direction__list">
			{data.map(({id, characteristic, value}) => (
				<div className="hero-direction__item" key={id}>
					<dt className="hero-direction__characteristic">{characteristic}</dt>
					<dd className="hero-direction__value body-l-medium">{value}</dd>
				</div>
			))}
		</dl>
	)
}

export default HeroDirectionList