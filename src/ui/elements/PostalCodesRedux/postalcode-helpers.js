import React from 'react'
import {
  MenuItem,
  TextField,
} from '@material-ui/core'

export const renderInput = (inputProps) => {
  const { InputProps, classes, ref, ...other } = inputProps

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
         root: classes.inputRoot,
        },
        ...InputProps,
      }}
      {...other}
    />
  )
}

export const renderSuggestion = ({
  suggestion,
  index,
  itemProps,
  highlightedIndex,
  selectedItem
}) => {
  const isHighlighted = highlightedIndex === index
  const isSelected = (selectedItem || '').indexOf(suggestion.searchString) > -1
  return (
    <MenuItem
      {...itemProps}
      key={suggestion._id}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {suggestion.searchString}
    </MenuItem>
  )
}