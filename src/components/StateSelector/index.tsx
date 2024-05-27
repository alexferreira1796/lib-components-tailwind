import React, { type FC, ChangeEvent } from 'react';

import {
	brazilianStates,
	BrazilianStatesProps,
} from './config';

interface StateSelectorProps {
	selectedState: string;
	setSelectedState: React.Dispatch<React.SetStateAction<string>>;
}

const StateSelector: FC<StateSelectorProps> = ({
	selectedState,
	setSelectedState,
}) => {
	const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedState(event.target.value);
	};

	return (
		<div className='w-full'>
			<label htmlFor="state-select" className='block text-[#555555] text-sm mb-1 font-inter'>Estado</label>
			<select id="state-select" value={selectedState} onChange={handleChange} className='w-full h-16 bg-white border border-[#E8E8E8] text-[#555555] placeholder-[#555555] pl-6 rounded-lg outline-none focus:ring-2 focus:ring-[#D8F32F] font-inter'>
				<option value="" disabled>
					Selecionar
				</option>
				{brazilianStates?.map((state: BrazilianStatesProps) => (
					<option key={state.slug} value={state.slug}>
						{state.name} ({state.slug})
					</option>
				))}
			</select>
		</div>
	);
};

export default StateSelector;
