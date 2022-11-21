import React from 'react';

import { SegmentedControl } from '@/components/SegmentedControl';

import { CategoriesList, FiltersTypesEnum } from '@/constants/categories';

import { selectComponentBySelectType } from './utils';

interface Props {
  categoryIndex: number;
}

export const FiltersScreenFiltersList: React.FC<Props> = ({
  categoryIndex,
}) => {
  return (
    <>
      {CategoriesList[categoryIndex].filters.map(
        ({ type, options, title, selectType }) => {
          const props = {
            options: options || [],
            halfWidth: type === FiltersTypesEnum.SELECT_HALF_WITH,
            title,
          };

          let ComponentToRender = null;

          if (type === FiltersTypesEnum.SEGMENTED) {
            ComponentToRender = SegmentedControl;
          }

          if (
            [
              FiltersTypesEnum.SELECT,
              FiltersTypesEnum.SELECT_HALF_WITH,
            ].includes(type) &&
            selectType !== undefined
          ) {
            ComponentToRender = selectComponentBySelectType(selectType);
          }

          return ComponentToRender && <ComponentToRender {...props} />;
        }
      )}
    </>
  );
};
