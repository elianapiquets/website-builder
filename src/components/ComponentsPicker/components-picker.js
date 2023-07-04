import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { uuid } from '../../utils/uuid';
import { componentsActions } from '../../store/components';
import { AvailableComponents } from '../Components';

import './components-picker.css'

export const ComponentsPicker = ({lockedPicker}) => {
  const dispatch = useDispatch();
  const onComponentClick = layout => {
    if (lockedPicker) return 
    return dispatch(componentsActions.addComponent({id: uuid(), layout}));
  }

  return (
    <div className="components-picker">
      {AvailableComponents.map(component => (
        <div
          className={lockedPicker ? 'components-picker__component components-picker__component--disabled' : 'components-picker__component'}
          key={component.layout}
          onClick={() => onComponentClick(component.layout)}
        >
          <span className="components-picker__component-label">
            {component.label}
          </span>
        </div>
      ))}
    </div>
  );
}

ComponentsPicker.propTypes = {
  lockedPicker: PropTypes.bool.isRequired,
};
