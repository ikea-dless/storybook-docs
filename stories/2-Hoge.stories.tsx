import * as React from 'react'
import { Text } from '../src/Text'
import { storiesOf } from '@storybook/react'

const stories = storiesOf('Components', module)

stories.add('Text', () => <Text message="this is message." />)
