import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import classes from './ProductColorButtons.module.scss';
import {ProductType} from '../../../../redux/product/types';

interface ProductColorButtonsProps {
  availableColors: string[];
  productType: ProductType;
  model: string;
  color: string;
  memory: number;
}

const ProductColorButtons: FC<ProductColorButtonsProps> = ({availableColors, model, color, memory, productType}) => {
  return (
    <>
      {availableColors.map((availableColor, index) =>
        <Link
          key={availableColor}
          to={`/products/${productType}-${model}-${memory}-${availableColor}`}
          className={
            `d-inline-block rounded-circle mb-3 ${availableColor}-color ` +
            classes.colorBtn + ' ' +
            (availableColor === color ? classes.btnActive : '') +
            (index !== availableColors.length - 1 ? ' me-3' : '')
          }
        />
      )}
    </>
  );
};

export default ProductColorButtons;
