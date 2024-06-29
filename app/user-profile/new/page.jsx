'use client';
import React, { useState, useRef } from 'react';
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const ASPECT_RATIO = 1;
const MIN_DIMENSION = 150;

const ChangePic = () => {
  const [imgSrc, setImgSrc] = useState('');
  const [crop, setCrop] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const imgRef = useRef(null);
  const canvasRef = useRef(null);

  const onSelectFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const imageUrl = reader.result?.toString() || '';
      setImgSrc(imageUrl);
    });
    reader.readAsDataURL(file);
  };

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    const cropWidthInPercent = (MIN_DIMENSION / width) * 100;

    const crop = makeAspectCrop(
      {
        unit: '%',
        width: cropWidthInPercent,
      },
      ASPECT_RATIO,
      width,
      height
    );
    const centeredCrop = centerCrop(crop, width, height);
    setCrop(centeredCrop);
  };

  const getCroppedImg = (image, crop) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error('Canvas is empty'));
          return;
        }
        blob.name = 'cropped.jpg';
        window.URL.revokeObjectURL(croppedImage);
        setCroppedImage(window.URL.createObjectURL(blob));
        resolve(blob);
      }, 'image/jpeg');
    });
  };

  const handleSaveCrop = async () => {
    if (imgRef.current && crop.width && crop.height) {
      try {
        await getCroppedImg(imgRef.current, crop);
      } catch (error) {
        console.error('Error cropping the image', error);
      }
    }
  };

  return (
    <div className="p-4">
      <input
        type="file"
        accept="image/*"
        onChange={onSelectFile}
        className="mb-4"
      />
      {imgSrc && (
        <div className="flex flex-col items-center">
          <ReactCrop
            crop={crop}
            onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
            circularCrop
            keepSelection
            aspect={ASPECT_RATIO}
            minWidth={MIN_DIMENSION}
          >
            <img
              ref={imgRef}
              src={imgSrc}
              alt="Upload"
              style={{ maxHeight: '70vh' }}
              onLoad={onImageLoad}
            />
          </ReactCrop>
          <button
            onClick={handleSaveCrop}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Save Crop
          </button>
        </div>
      )}
      {croppedImage && (
        <div className="mt-4">
          <h3 className="mb-2">Cropped Image</h3>
          <img src={croppedImage} alt="Cropped" className="rounded" />
        </div>
      )}
    </div>
  );
};

export default ChangePic;
