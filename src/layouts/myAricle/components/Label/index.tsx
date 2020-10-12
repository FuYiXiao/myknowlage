import { Tag } from '@alifd/next';
import React, { SFC } from 'react';
const { Group: TagGroup, Selectable: SelectableTag } = Tag;
//
const dataSource = ['selectable tag', 'I like orange', 'small tag', 'disabled', 'disabled & checked'];
const presetColors = ['blue', 'green', 'orange', 'red', 'turquoise', 'yellow'];
export interface PageHeaderProps {
    breadcrumbs?: { name: string; path?: string }[];
    title?: string;
    description?: string;
}
const Label: SFC<PageHeaderProps> = (props) => {
    return (
        <TagGroup>{
            dataSource.map((name, i) => (
                <SelectableTag key={name}{...props} >{name}</SelectableTag>
            ))
        }</TagGroup>
    )
}

export default Label;