import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {ProductType} from '../../../../redux/product/types';

interface ProductMemoryButtonsProps {
  availableMemories: number[];
  productType: ProductType;
  model: string;
  color: string;
  memory: number;
}

const ProductMemoryButtons: FC<ProductMemoryButtonsProps> = (
  {availableMemories, model, color, memory, productType}
) => {
  return (
    <>
      {availableMemories.map((availableMemory, index) =>
        <Link
          key={availableMemory}
          to={`/products/${productType}-${model}-${availableMemory}-${color}`}
          className={'btn btn-outline-primary mb-3' +
            (availableMemory === memory ? ' active' : '') +
            (index !== availableMemories.length - 1 ? ' me-3' : '')
          }
        >
          {availableMemory === 1024 ? '1 TB' : `${availableMemory} GB`}
        </Link>
      )}
    </>
  );
};

export default ProductMemoryButtons;
