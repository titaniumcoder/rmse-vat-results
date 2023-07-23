/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import { TextControl, CheckboxControl, __experimentalNumberControl as NumberControl, Flex, FlexBlock } from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	return (
		<div {...useBlockProps()}>
			{
				<InspectorControls key="settings">
					<h5>{__('Next Games / Last Results of the club', 'tc-shv-results')}</h5>
					<div className="instructions">
						{__('Choose how many elements (last results and next games) should be displayed. 0 or less means it will not be shown at all. Will add a preview in a future version.', 'tc-shv-results')}
					</div>
					<Flex>
						<FlexBlock>
							<NumberControl
								isShiftStepEnabled={true}
								label={__('Last Results', 'tc-shv-results')}
								shiftStep={5}
								value={attributes.results}
								onChange={(val) => setAttributes({ results: val })}
							/>
						</FlexBlock>
						<FlexBlock>
							<NumberControl
								isShiftStepEnabled={true}
								label={__('Scheduled Games', 'tc-shv-results')}
								shiftStep={5}
								value={attributes.scheduled}
								onChange={(val) => setAttributes({ scheduled: val })}
							/>
						</FlexBlock>
					</Flex>
					<TextControl
						label={__('Date Format', 'tc-shv-results')}
						value={attributes.dateformat}
						onChange={(val) => setAttributes({ dateformat: val })}
					/>
					<CheckboxControl
						label={__('Show Header?', 'tc-shv-results')}
						checked={attributes.header}
						onChange={(val) => setAttributes({ header: val })}
					/>
					<CheckboxControl
						label={__('Show game type?', 'tc-shv-results')}
						checked={attributes.type}
						onChange={(val) => setAttributes({ type: val })}
					/>
					<CheckboxControl
						label={__('Show Venue?', 'tc-shv-results')}
						checked={attributes.venue}
						onChange={(val) => setAttributes({ venue: val })}
					/>
					<CheckboxControl
						label={__('Show Results?', 'tc-shv-results')}
						checked={attributes.with_result}
						onChange={(val) => setAttributes({ with_result: val })}
					/>
				</InspectorControls>
			}

			<table>
				{attributes.header &&
					<thead>
						<tr>
							<th className='text-center'>
								{__('Datum / Zeit', 'tc-shv-results')}
							</th>
							{attributes.type &&
								<th className='text-center'>
									{__('Typ', 'tc-shv-results')}
								</th>
							}
							<th className='text-left'>
								{__('Heim', 'tc-shv-results')}
							</th>
							<th className='text-left'>
								{__('Gast', 'tc-shv-results')}
							</th>
							{attributes.venue &&
								<th className='text-left'>
									{__('Ort', 'tc-shv-results')}
								</th>
							}
							{attributes.with_result &&
								<th className='text-center'>
									{__('Resultat', 'tc-shv-results')}
								</th>
							}
						</tr>
					</thead>
				}
				<tbody>
					<tr className="tc-shv-results-game-played tc-shv-results-game-club-internal">
						<td className='text-center'>
							21.10.23 14:25
						</td>
						{attributes.type &&
							<td className='text-center'>
								Clubintern
							</td>
						}
						<td className='text-left'>
							Team A
						</td>
						<td className='text-left'>
							Team B
						</td>
						{attributes.venue &&
							<td className='text-left'>
								Halle X
							</td>
						}
						{attributes.with_result &&
							<td className='text-center'>
								33:30 (16:17)
							</td>
						}
					</tr>
					<tr className="tc-shv-results-game-played  tc-shv-results-game-win">
						<td className='text-center'>
							21.10.23 14:25
						</td>
						{attributes.type &&
							<td className='text-center'>
								Sieg
							</td>
						}
						<td className='text-left'>
							Team A
						</td>
						<td className='text-left'>
							Team B
						</td>
						{attributes.venue &&
							<td className='text-left'>
								Halle X
							</td>
						}
						{attributes.with_result &&
							<td className='text-center'>
								33:30 (16:17)
							</td>
						}
					</tr>
					<tr className="tc-shv-results-game-played  tc-shv-results-game-draw">
						<td className='text-center'>
							21.10.23 14:25
						</td>
						{attributes.type &&
							<td className='text-center'>
								Unentschieden
							</td>
						}
						<td className='text-left'>
							Team A
						</td>
						<td className='text-left'>
							Team B
						</td>
						{attributes.venue &&
							<td className='text-left'>
								Halle X
							</td>
						}
						{attributes.with_result &&
							<td className='text-center'>
								33:33 (16:17)
							</td>
						}
					</tr>
					<tr className="tc-shv-results-game-played  tc-shv-results-game-loss">
						<td className='text-center'>
							21.10.23 14:25
						</td>
						{attributes.type &&
							<td className='text-center'>
								Niederlage
							</td>
						}
						<td className='text-left'>
							Team B
						</td>
						<td className='text-left'>
							Team A
						</td>
						{attributes.venue &&
							<td className='text-left'>
								Halle X
							</td>
						}
						{attributes.with_result &&
							<td className='text-center'>
								30:33 (16:17)
							</td>
						}
					</tr>

					<tr className="tc-shv-results-game-planned tc-shv-results-game-home">
						<td className='text-center'>
							21.10.23 14:25
						</td>
						{attributes.type &&
							<td className='text-center'>
								Heimspiel
							</td>
						}
						<td className='text-left'>
							Team A
						</td>
						<td className='text-left'>
							Team B
						</td>
						{attributes.venue &&
							<td>
								Halle X
							</td>
						}
						{attributes.with_result &&
							<td>
							</td>
						}
					</tr>
					<tr className="tc-shv-results-game-planned tc-shv-results-game-away">
						<td className='text-center'>
							21.10.23 14:25
						</td>
						{attributes.type &&
							<td className='text-center'>
								Auswärtsspiel
							</td>
						}
						<td className='text-left'>
							Team A
						</td>
						<td className='text-left'>
							Team B
						</td>
						{attributes.venue &&
							<td className='text-left'>
								Halle X
							</td>
						}
						{attributes.with_result &&
							<td>
							</td>
						}
					</tr>
				</tbody>
			</table>
		</div >
	);
}
