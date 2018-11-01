sd = startDate
ed = endDate
now() = current date & time

- >> disablePast
- emptyLabel - Message displayed in text field if null passed
- >> format
- lableFunc
- >> minDate
- > minDateMessage
- >> onChange (or use redux-form onChange?
- >> value

# Picker Props

## disablePast
- sd.disablePast = true
- ed.disablePast = true

## format
- sd.format = this.state.format
- ed.format = this.state.format

## minDate
- ed.minDate === sd.date
- sd.minDate = now()

## minDateMessage
sd.minDateMessage <\not set>
ed.minDateMessage='End date must be after start date'

## onChange
sd.onChange=this.localOnChange
ed.onChange=this.localOnChange

## value
sd.value = this.state.startDate
ed.value = this.state.endDate

# Redux Form Field Props
## Meta
- active - true if has focus
- dirty - true if changed since initialization (opposite of pristine)
- error - error message for field
- initial - initial value of field
- pristine - true if field is same as when initialized (opposite of dirty)
- submitting - true if field is being submitted
- submitFailed - ture if submit failed
- touched
- valid - true if field passes validation
- visited - ture if the field has ever had focus
- warning - message for warning validation

