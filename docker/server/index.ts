/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.ts                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: shonakam <shonakam@student.42tokyo.jp>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/09/09 06:32:59 by shonakam          #+#    #+#             */
/*   Updated: 2024/09/09 08:45:33 by shonakam         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

console.log("Hello via Bun!");
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.json({ 
		status: 'ok',
		message: 'THIS IS HERE'
	});
});

app.get('/health', (req, res) => {
	res.json({ 
		status: 'ok',
		message: 'health is running'
	});
});

// app.get('/time', (req, res) => {
//     const currentTime = new Date().toISOString();
//     res.json({
//         status: 'ok',
//         message: 'accessed at',
//         currentTime: currentTime
//     });
// });

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
