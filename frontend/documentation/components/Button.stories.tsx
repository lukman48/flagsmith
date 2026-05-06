import React from 'react'
import type { Meta, StoryObj } from 'storybook'

import {
  Button,
  themeClassNames,
  sizeClassNames,
} from 'components/base/forms/Button'
import type { ButtonType } from 'components/base/forms/Button'
import Icon from 'components/icons/Icon'

const themeOptions = Object.keys(themeClassNames) as Array<
  keyof typeof themeClassNames
>
const sizeOptions = Object.keys(sizeClassNames) as Array<
  keyof typeof sizeClassNames
>

const meta: Meta<ButtonType> = {
  argTypes: {
    children: {
      control: 'text',
      description: 'Button label content.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button, preventing interaction.',
    },
    size: {
      control: 'select',
      description: 'Size of the button.',
      options: sizeOptions,
      table: { defaultValue: { summary: 'default' } },
    },
    theme: {
      control: 'select',
      description: 'Visual variant of the button.',
      options: themeOptions,
      table: { defaultValue: { summary: 'primary' } },
    },
  },
  args: {
    children: 'Button',
    disabled: false,
    size: 'default',
    theme: 'primary',
  },
  component: Button,
  parameters: { layout: 'centered' },
  title: 'Components/Button',
}

export default meta

type Story = StoryObj<ButtonType>

export const Default: Story = {}

export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'All available button themes. Use `primary` for main actions, `secondary` for alternatives, `outline` for low-emphasis actions, `danger` for destructive actions, and `success` for positive confirmations. `icon` is for icon-only buttons (copy, action triggers in tables); `project` is the avatar-style button used in the project picker.',
      },
    },
  },
  render: () => (
    <div className='d-flex align-items-center flex-wrap gap-2'>
      <Button theme='primary'>Primary</Button>
      <Button theme='secondary'>Secondary</Button>
      <Button theme='outline'>Outline</Button>
      <Button theme='danger'>Danger</Button>
      <Button theme='success'>Success</Button>
      <Button theme='tertiary'>Tertiary</Button>
      <Button theme='text'>Text</Button>
      <Button theme='icon' iconLeft='copy'>
        {''}
      </Button>
      <Button theme='project'>Project</Button>
    </div>
  ),
}

export const IconAsChildren: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Pattern used by `btn-with-icon` consumers (e.g. table-row delete affordances): the icon is passed as `children`, not via the `iconLeft`/`iconRight` props. Layout must match the iconLeft/iconRight rendering for visual consistency. Snapshotted to catch wrapper-introduced height/width drift.',
      },
    },
  },
  render: () => (
    <div className='d-flex align-items-center flex-wrap gap-2'>
      <Button className='btn btn-with-icon' type='button'>
        <Icon name='trash-2' width={20} fill='#656D7B' />
      </Button>
      <Button className='btn btn-with-icon' type='button'>
        <Icon name='edit' width={20} fill='#656D7B' />
      </Button>
      <Button className='btn btn-with-icon' type='button'>
        <Icon name='copy' width={20} fill='#656D7B' />
      </Button>
    </div>
  ),
}

export const IconAndLabel: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The most common icon usage in real code: `iconLeft` or `iconRight` paired with a text label. Dedicated snapshot so spacing regressions between the icon and the label are caught independently of the Themes story.',
      },
    },
  },
  render: () => (
    <div className='d-flex align-items-center flex-wrap gap-2'>
      <Button iconLeft='plus'>Add new</Button>
      <Button iconRight='chevron-down'>Options</Button>
      <Button iconLeft='copy' iconRight='chevron-down'>
        Both icons
      </Button>
    </div>
  ),
}

export const AsAnchor: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Button renders as an `<a>` element when `href` is set — a separate code path from the `<button>` branch with its own content wrapper. Snapshotted so changes to the anchor branch can't regress without showing up.",
      },
    },
  },
  render: () => (
    <div className='d-flex align-items-center flex-wrap gap-2'>
      <Button href='https://docs.flagsmith.com'>Docs</Button>
      <Button href='https://docs.flagsmith.com' iconLeft='plus'>
        Add new
      </Button>
      <Button href='https://docs.flagsmith.com' theme='secondary'>
        Cancel
      </Button>
    </div>
  ),
}

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Button sizes from large to extra small.',
      },
    },
  },
  render: () => (
    <div className='d-flex align-items-center flex-wrap gap-2'>
      <Button size='large'>Large</Button>
      <Button size='default'>Default</Button>
      <Button size='small'>Small</Button>
      <Button size='xSmall'>Extra Small</Button>
    </div>
  ),
}

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Disabled buttons are non-interactive and visually muted.',
      },
    },
  },
  render: () => (
    <div className='d-flex align-items-center flex-wrap gap-2'>
      <Button theme='primary' disabled>
        Primary
      </Button>
      <Button theme='secondary' disabled>
        Secondary
      </Button>
      <Button theme='danger' disabled>
        Danger
      </Button>
      <Button theme='outline' disabled>
        Outline
      </Button>
    </div>
  ),
}

export const WithIcons: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Buttons support `iconLeft` and `iconRight` props. Pass any `IconName` from the icon system.',
      },
    },
  },
  render: () => (
    <div className='d-flex align-items-center flex-wrap gap-2'>
      <Button theme='primary' iconLeft='plus'>
        Add Item
      </Button>
      <Button theme='danger' iconLeft='trash-2'>
        Delete
      </Button>
      <Button theme='outline' iconRight='chevron-right'>
        Next
      </Button>
    </div>
  ),
}
