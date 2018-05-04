import React from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { translate, DashboardMenuItem, MenuItemLink } from "admin-on-rest";
import { List, ListItem } from "material-ui/List";
import Divider from "material-ui/Divider";

const styles = {
    main: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "100%",
        position: "relative"
    },
    leftNavBody: {
        overflowY: "auto",
        overflowX: "hidden",
        paddingBottom: "60px"
    },
    leftNavFooter: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        overflow: "hidden",
        paddingTop: "4px"
    }
};

const Menu = ({ onMenuTap, translate, logout }) => (
    <div style={styles.main}>
        <div style={styles.leftNavBody}>
            <DashboardMenuItem onClick={onMenuTap} />
            <MenuItemLink
                key="r1"
                to="/Booking"
                primaryText="Booking"
                onClick={onMenuTap}
            />
            <MenuItemLink
                key="r3"
                to="/briefing"
                primaryText="Briefing"
                onClick={onMenuTap}
            />
            <Divider />
            <List>
                <ListItem
                    primaryText="Room Calendars"
                    initiallyOpen={true}
                    primaryTogglesNestedList
                    nestedItems={[
                        <MenuItemLink
                            key="res3"
                            to="/blue-hour/calendar"
                            primaryText="Blue Hour"
                            onClick={onMenuTap}
                        />,
                        <MenuItemLink
                            key="res4"
                            to="/equinox/calendar"
                            primaryText="Equinox"
                            onClick={onMenuTap}
                        />,
                        <MenuItemLink
                            key="res5"
                            to="/green-glow/calendar"
                            primaryText="Green Glow"
                            onClick={onMenuTap}
                        />,
                        <MenuItemLink
                            key="res6"
                            to="/midnight-sun/calendar"
                            primaryText="Midnight Sun"
                            onClick={onMenuTap}
                        />,
                        <MenuItemLink
                            key="res7"
                            to="/northern-light/calendar"
                            primaryText="Northern Light"
                            onClick={onMenuTap}
                        />,
                        <MenuItemLink
                            key="res8"
                            to="/super-moon/calendar"
                            primaryText="Super Moon"
                            onClick={onMenuTap}
                        />
                    ]}
                />
            </List>
        </div>
        <div style={styles.leftNavFooter}>
            <Divider />
            {logout}
        </div>
    </div>
);

const enhance = compose(
    connect(state => ({
        theme: state.theme,
        locale: state.locale
    })),
    translate
);

export default enhance(Menu);