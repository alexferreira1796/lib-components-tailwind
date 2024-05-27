import React, { ChangeEvent, useRef } from 'react';

import { UploadIcon } from './components/UploadIcon';

export interface ImageProps {
	file: File;
	preview: string;
}

interface ImageUploadProps {
	images: ImageProps[];
	setImages: React.Dispatch<React.SetStateAction<ImageProps[]>>;
	label: string;
	required?: boolean;
	multiple?: boolean;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
	multiple = true,
	images,
	setImages,
	label,
	required = false,
}) => {
	const inputFileRef = useRef<HTMLInputElement>(null);

	const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files || e.target.files.length === 0) return;

		const selectedImages = Array.from(e.target.files);

		if (!multiple && images.length > 0) {
			alert('Você só pode carregar uma imagem.');
			return;
		}

		if (multiple && selectedImages.length + images.length > 7) {
			alert('Você pode carregar no máximo 7 imagens.');
			return;
		}

		const imagesWithPreview: ImageProps[] = selectedImages.map(image => ({
			file: image,
			preview: URL.createObjectURL(image),
		}));

		setImages(prevImages => [...prevImages, ...imagesWithPreview]);

		if (inputFileRef.current) {
			inputFileRef.current.value = '';
		}
	};

	const removeImage = (index: number) => {
		setImages(prevImages => prevImages.filter((_, i) => i !== index));

		if (inputFileRef.current) {
			inputFileRef.current.value = '';
		}
	};

	return (
		<div>
			{label && (
				<p className='block text-[#555555] text-sm font-inter mb-5'>
					{label} {required && <span className='text-[#FF4E4E]'>*</span>}
				</p>
			)}
			<div onClick={() => inputFileRef.current?.click()} className='xs:w-full sm:w-full h-[73px] md:w-[512px] bg-[#F6FEC6] text-[#222222] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center gap-6 cursor-pointer'>
				<UploadIcon />
				<p className='text-base font-medium'>Upload de imagem</p>
			</div>
			<input
				ref={inputFileRef}
				type="file"
				accept="image/*"
				multiple={multiple ?? undefined}
				onChange={handleImageChange}
				style={{ display: 'none' }}
			/>
			<div className="flex flex-wrap cursor-pointer">
				{images.map((image, index) => (
					<div key={index} className='m-2 relative'>
						<img src={image.preview} alt={`preview ${index}`} className='w-20 h-20 object-cover' />
						<button onClick={() => removeImage(index)} className="bsolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center cursor-pointer">
							X
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageUpload;
