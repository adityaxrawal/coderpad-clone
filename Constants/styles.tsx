import {Center, createStyles} from '@mantine/core'

const Styles = createStyles((theme, _params, getRef) => {
    theme.colorScheme = 'dark';
    const icon = getRef('icon');
    return {
      Navheader: {
        paddingBottom: theme.spacing.md,
        marginBottom: theme.spacing.md * 1.5,
        borderBottom: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
      },
  
      Navfooter: {
        paddingTop: theme.spacing.md,
        marginTop: theme.spacing.md,
        borderTop: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
      },
  
      Navlink: {
        ...theme.fn.focusStyles(),
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        fontSize: theme.fontSizes.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
        padding: `${theme.spacing.xs}px`,
        margin: `${theme.spacing.sm}px`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,
        cursor: "pointer",
  
        '&:hover': {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  
          [`& .${icon}`]: {
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
          },
        },
      },
  
      NavlinkIcon: {
        ref: icon,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
        marginRight: theme.spacing.sm,
      },
  
      NavlinkActive: {
        '&, &:hover': {
          backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
            .background,
          color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
          [`& .${icon}`]: {
            color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
          },
        },
      },
      Username:{
        float: 'right',
        padding: '0px',
        margin: '0px',
      },
      PaneTwo:{
        backgroundColor: '#1A1B1E',
        height: '96vh',
        maxWidth: '42vw',
        padding: '0',
        margin: "0",
      },
      Result:{
        // margin: '5px',
        padding: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Roboto, sans-serif',
        borderBottom: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
      },
      ResultContainer:{
        padding: "10px",
        height: "300px",
        border: `3px solid wheat`,
      }
    };
  });
export default Styles;