"use client";

import { COLLOR_EXTENSION_MAP } from "@/constants";
import { FileType } from "@/typing";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import prettyBytes from "pretty-bytes";
import { FileIcon, defaultStyles } from "react-file-icon";

export const columns: ColumnDef<FileType>[] = [
	{
		accessorKey: "type",
		header: "Type",
		cell: ({ renderValue, ...props }) => {
			const type = renderValue() as string;
			const extension: string = type.split("/")[1];
			return (
				<div className='w-10'>
					<FileIcon
						extension={extension}
						labelColor={
							COLLOR_EXTENSION_MAP[extension]
						}
						//@ts-ignore
						{...defaultStyles[extension]}
					/>
				</div>
			);
		},
	},
	{
		accessorKey: "filename",
		header: "Filename",
	},
	{
		accessorKey: "timestamp",
		header: "Date Added",
	},
	{
		accessorKey: "size",
		header: "Size",
		cell: ({ renderValue, ...props }) => {
			return (
				<span>
					{prettyBytes(renderValue() as number)}
				</span>
			);
		},
	},
	{
		accessorKey: "downloadUrl",
		header: "Link",
		cell: ({ renderValue, ...props }) => {
			return (
				<a
					href={renderValue() as string}
					target='_blank'
					className='underline cursor-pointer text-blue-500 hover:text-blue-600'>
					Downlaod
				</a>
			);
		},
	},
];
