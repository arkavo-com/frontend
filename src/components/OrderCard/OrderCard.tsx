import { Button, Card, Typography } from "antd";
import React, { FC, useMemo } from "react";

const { Title, Text } = Typography;

type ListItem = {
  key: string;
  tab: React.ReactNode;
};

type Props = {
  children: any;
  activeTabKey: string;
  isActive: boolean;
  isEdit: boolean;
  name: string;
  onClose: () => void;
  onDeleteAttribute: () => void;
  onSaveClick: () => void;
  onTabChange: (item: string) => void;
  state?: string;
  rule?: string;
  tabList: ListItem[];
  toggleEdit: () => void;
};

const OrderCard: FC<Props> = (props) => {
  const {
    activeTabKey,
    isActive,
    isEdit,
    name,
    onClose,
    onDeleteAttribute,
    onSaveClick,
    onTabChange,
    state,
    rule,
    tabList,
    toggleEdit,
  } = props;

  const actions = useMemo(() => {
    const config = {
      view: [{ onClick: toggleEdit, key: "edit", text: "Edit Rule" },{ onClick: onDeleteAttribute, key: "delete-attribute", text: "Delete Attribute" }],
      edit: [
        { onClick: onSaveClick, key: "save-rule", text: "Save rule" },
        { onClick: toggleEdit, key: "cancel", text: "Cancel" },
      ],
    };

    if (!isActive && !activeTabKey) {
      return;
    }

    const key = isEdit ? "edit" : "view";

    return config[key].map(({ onClick, key, text }) => (
      <Button onClick={onClick} key={key} id={key}>
        {text}
      </Button>
    ));
  }, [activeTabKey, isActive, isEdit, toggleEdit, onSaveClick]);

  const title = useMemo(
    () => (
      <div>
        <Title level={3}>{name}</Title>
        <Text strong>{state}</Text>
        <Text type="secondary"> Access</Text>
        <br/>
        <Text strong>{rule}</Text>
        <Text type="secondary"> Rule</Text>
      </div>
    ),
    [name, state, rule],
  );

  const extra = useMemo(() => {
    return isActive && <Button onClick={onClose} id="close-details-button">Close</Button>;
  }, [isActive, onClose]);

  return (
    <Card
      actions={actions}
      activeTabKey={activeTabKey}
      extra={extra}
      onTabChange={onTabChange}
      tabList={tabList}
      title={title}
    >
      {props.children}
    </Card>
  );
};

OrderCard.displayName = 'OrderCard';

export default OrderCard;
