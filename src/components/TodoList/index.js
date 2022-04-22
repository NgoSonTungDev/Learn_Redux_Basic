import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";

import { useDispatch , useSelector} from "react-redux";
import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { todoListSelector } from "../../redux/selectors";





export default function TodoList() {
  const dispatch = useDispatch();
  const uuid = uuidv4();

  const todoList = useSelector(todoListSelector);


  const [nameTodo , setNameTodo] = useState('');
  const [priority , setpriority] = useState('Medium');


  const hangdleAddButtonClick = () => {
    //dispatch
    dispatch(
      addTodo({
        id: uuid,
        name: nameTodo,
        priority: priority,
        completed: true,
      })
    );
  };


  const handleInputName = (e) =>{
    setNameTodo(e.target.value);
  }

  const handlePriority=(e)=>{
    setpriority(e);
  }


  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {/* <Todo name="Learn React" prioriry="High" />
        <Todo name="Learn Redux" prioriry="Medium" />
        <Todo name="Learn JavaScript" prioriry="Low" /> */}
      {todoList.map(todo=> <Todo name={todo.name} prioriry={todo.priority}/>)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={nameTodo} onChange={handleInputName}/>
          <Select defaultValue="Medium" value={priority} onChange={handlePriority}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={hangdleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
